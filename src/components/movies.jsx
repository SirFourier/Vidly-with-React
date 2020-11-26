import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { getMovies, deleteMovie } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import SearchBox from "./common/searchBox";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    maxMoviesPerPage: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    selectedGenre: {},
    searchString: "",
  };

  async componentDidMount() {
    const { data: movieData } = await getMovies();

    const movies = movieData.map((movie) => {
      // add like property
      movie.like = false;
      return movie;
    });

    const { data: genreData } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...genreData];
    this.setState({ movies, genres, selectedGenre: genres[0] });
  }

  handleGenreChange = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchString: "" });
  };

  handleSearchChange = (query) => {
    this.setState({ searchString: query, currentPage: 1, selectedGenre: {} });
  };

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = async (movie) => {
    // optimistic update
    const originalMovies = this.state.movies;
    let newMovies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This movie has already been deleted.");
      }
      this.setState({ movies: originalMovies });
    }
  };

  handleLike = (movie) => {
    if (this.state.newMovie === movie) {
      const newMovie = { ...this.state.newMovie };
      newMovie.like = !newMovie.like;
      this.setState({ newMovie: newMovie });
    } else {
      const newMovies = [...this.state.movies];
      const index = newMovies.indexOf(movie);
      newMovies[index].like = !newMovies[index].like;
      this.setState({ movies: newMovies });
    }
    // In the future. We may want to call backend server to update moveies.
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      movies,
      maxMoviesPerPage,
      currentPage,
      selectedGenre,
      sortColumn,
      searchString,
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id && !searchString
        ? movies.filter((movie) => movie.genre.name === selectedGenre.name)
        : movies;

    const search = new RegExp(searchString, "i");
    const searchedMovies = searchString
      ? filteredMovies.filter((movie) => !movie.title.search(search))
      : filteredMovies;

    const sortedMovies = _.orderBy(
      searchedMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const { items: paginatedMovies } = paginate(
      sortedMovies,
      currentPage,
      maxMoviesPerPage
    );

    return { paginatedMovies, totalCount: sortedMovies.length };
  };

  render() {
    const {
      maxMoviesPerPage,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
      searchString,
    } = this.state;

    const { paginatedMovies, totalCount } = this.getPagedData();

    return (
      <div className="row">
        {/* Note that col-2 takes 2 / 12 available spaces while col just takes remaining amount */}
        <div className="col-2">
          <ListGroup
            items={genres}
            activeItem={selectedGenre}
            onItemChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <Link
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
            to="/movies/new"
          >
            New Movie
          </Link>
          <h5>There are {totalCount} movies in the database.</h5>
          <SearchBox value={searchString} onChange={this.handleSearchChange} />
          <MoviesTable
            movies={paginatedMovies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            totalItems={totalCount}
            itemsPerPage={maxMoviesPerPage}
            currentPage={currentPage}
            onPage={this.handlePage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
