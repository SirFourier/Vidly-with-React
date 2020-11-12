import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
import NewMovie from "./newMovie";

class Movies extends Component {
  state = {
    movies: getMovies(),
    newMovie: {
      _id: "",
      title: "",
      genre: { _id: "", name: "" },
      numberInStock: "",
      dailyRentalRate: "",
      like: false,
    },
  };

  constructor() {
    super();
    this.state.movies = getMovies().map((movie) => {
      // add like property
      movie.like = false;
      return movie;
    });
  }

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

  handleChange = (event) => {
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

  render() {
    return (
      <>
        <p>There are {this.state.movies.length} movies in the database.</p>
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
            {this.state.movies.map((movie, index) => (
              <Movie
                key={movie._id}
                movie={movie}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                index={index}
              ></Movie>
            ))}
            <NewMovie
              onChange={this.handleChange}
              onAdd={this.handleAdd}
              newMovie={this.state.newMovie}
              onLike={this.handleLike}
            ></NewMovie>
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
