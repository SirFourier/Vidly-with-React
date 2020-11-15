import React from "react";
import Like from "./common/like";
import PropTypes from "prop-types";

// handleNewMovieChange = (event) => {
//   const newMovie = { ...this.state.newMovie };
//   const { id, value } = event.target;
//   if (id === "genre") {
//     newMovie["genre"].name = value;
//   } else {
//     newMovie[id] = value;
//   }
//   this.setState({ newMovie: newMovie });
// };

// handleAdd = () => {
//   // create new id based on index
//   const new_id = this.state.movies.length + 1;
//   const newMovie = { ...this.state.newMovie };
//   newMovie._id = new_id;
//   newMovie.genre._id = new_id;

//   // hard copy movies and set new movies
//   const newMovies = [...this.state.movies];
//   newMovies.push(newMovie);
//   this.setState({ movies: newMovies });

//   // In the future. We may want to call backend server to update moveies.
// };

function NewMovie(props) {
  const { onChange, onAdd, onLike, newMovie } = props;
  return (
    <tr>
      <th scope="row">New</th>
      <td className="input-group-sm">
        <input
          className="form-control"
          placeholder="Title"
          id="title"
          onChange={onChange}
        />
      </td>
      <td className="input-group-sm">
        <input
          className="form-control"
          placeholder="Genre"
          id="genre"
          onChange={onChange}
        />
      </td>
      <td className="input-group-sm">
        <input
          className="form-control"
          placeholder="Stock"
          id="numberInStock"
          onChange={onChange}
        />
      </td>
      <td className="input-group-sm">
        <input
          className="form-control"
          placeholder="Rate"
          id="dailyRentalRate"
          onChange={onChange}
        />
      </td>
      <td className="input-group-sm">
        <Like movie={newMovie} onLike={onLike}></Like>
      </td>
      <td className="input-group-sm">
        <button className="btn btn-success btn-sm" onClick={onAdd}>
          Add
        </button>
      </td>
    </tr>
  );
}

NewMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  newMovie: PropTypes.object.isRequired,
};

export default NewMovie;
