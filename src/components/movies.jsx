import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    maxMoviesPerPage: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const movies = getMovies().map((movie) => {
      // add like property
      movie.like = false;
      return movie;
    });
    const allGenres = { _id: "", name: "All Genres" };
    const genres = [allGenres, ...getGenres()];

    this.setState({ movies, genres, currentGenre: allGenres });
  }

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = (movie) => {
    let newMovies = this.state.movies.filter((m) => m._id !== movie._id);

    // asign new id
    newMovies = newMovies.map((movie, index) => {
      movie._id = index;
      movie.genre._id = index;
      return movie;
    });

    this.setState({ movies: newMovies });
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
      currentGenre,
      sortColumn,
    } = this.state;

    const filteredMovies =
      currentGenre && currentGenre._id
        ? movies.filter((movie) => movie.genre.name === currentGenre.name)
        : movies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const { items: paginatedMovies } = paginate(
      sortedMovies,
      currentPage,
      maxMoviesPerPage
    );

    return { paginatedMovies, totalCount: filteredMovies.length };
  };

  render() {
    const {
      maxMoviesPerPage,
      currentPage,
      genres,
      currentGenre,
      sortColumn,
    } = this.state;

    const { paginatedMovies, totalCount } = this.getPagedData();

    return (
      <div className="row">
        {/* Note that col-2 takes 2 / 12 available spaces while col just takes remaining amount */}
        <div className="col-2">
          <ListGroup
            items={genres}
            activeItem={currentGenre}
            onItemChange={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <Link className="btn btn-primary m-3" to="/movies/new">
            New Movie
          </Link>
          <p>There are {totalCount} movies in the database.</p>
          <MoviesTable
            paginatedMovies={paginatedMovies}
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
