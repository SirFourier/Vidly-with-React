import React from "react";
import Like from "./common/like";
import PropTypes from "prop-types";

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
