import React from "react";
import Like from "./common/like";
import PropTypes from "prop-types";

function Movie(props) {
  const { index, movie, onDelete, onLike } = props;

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <Like movie={movie} onLike={onLike}></Like>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(movie)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

Movie.propTypes = {
  index: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Movie;
