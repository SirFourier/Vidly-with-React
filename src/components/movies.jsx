import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
import NewMovie from "./newMovie";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies().map((movie) => {
      // add like property
      movie.like = false;
      return movie;
    }),
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

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleNumberOfPages = () => {
    const { movies, maxMoviesPerPage } = this.state;
    this.setState({
      numberOfPages: Math.ceil(movies.length / maxMoviesPerPage),
    });
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

    this.handleNumberOfPages();
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

    this.handleNumberOfPages();

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

  render() {
    const { movies, maxMoviesPerPage, currentPage, newMovie } = this.state;
    const count = movies.length;
    const firstMovieIndex = (currentPage - 1) * maxMoviesPerPage;
    return (
      <>
        <p>There are {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies
              .slice(firstMovieIndex, firstMovieIndex + maxMoviesPerPage)
              .map((movie, index) => (
                <Movie
                  key={movie._id}
                  movie={movie}
                  onDelete={this.handleDelete}
                  onLike={this.handleLike}
                  index={index + firstMovieIndex}
                ></Movie>
              ))}
            <NewMovie
              onChange={this.handleNewMovieChange}
              onAdd={this.handleAdd}
              newMovie={newMovie}
              onLike={this.handleLike}
            ></NewMovie>
          </tbody>
        </table>
        <Pagination
          totalItems={count}
          itemsPerPage={maxMoviesPerPage}
          currentPage={currentPage}
          onPage={this.handlePage}
        />
      </>
    );
  }
}

export default Movies;
