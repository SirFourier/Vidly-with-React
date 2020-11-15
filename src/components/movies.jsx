import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    newMovie: {
      _id: "",
      title: "",
      genre: { _id: "", name: "" },
      numberInStock: "",
      dailyRentalRate: "",
      like: false,
    },
    maxMoviesPerPage: 4,
    currentPage: 1,
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

    this.setState({
      movies: newMovies,
    });
  };

  handleNewMovieChange = (event) => {
    const newMovie = { ...this.state.newMovie };
    const { id, value } = event.target;
    if (id === "genre") {
      newMovie["genre"].name = value;
    } else {
      newMovie[id] = value;
    }
    this.setState({ newMovie: newMovie });
  };

  handleAdd = () => {
    // create new id based on index
    const new_id = this.state.movies.length + 1;
    const newMovie = { ...this.state.newMovie };
    newMovie._id = new_id;
    newMovie.genre._id = new_id;

    // hard copy movies and set new movies
    const newMovies = [...this.state.movies];
    newMovies.push(newMovie);
    this.setState({ movies: newMovies });

    // In the future. We may want to call backend server to update moveies.
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

  handleSort = (path) => {
    console.log(path);
  };

  render() {
    const {
      movies,
      maxMoviesPerPage,
      currentPage,
      newMovie,
      genres,
      currentGenre,
    } = this.state;
    const filteredMovies =
      currentGenre && currentGenre._id
        ? movies.filter((movie) => movie.genre.name === currentGenre.name)
        : movies;
    const { items: paginatedMovies, firstIndex } = paginate(
      filteredMovies,
      currentPage,
      maxMoviesPerPage
    );
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
          <p>There are {filteredMovies.length} movies in the database.</p>
          <MoviesTable
            paginatedMovies={paginatedMovies}
            firstIndex={firstIndex}
            newMovie={newMovie}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onNewMovieChange={this.handleNewMovieChange}
            onAdd={this.handleAdd}
            onSort={this.handleSort}
          />
          <Pagination
            totalItems={filteredMovies.length}
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
