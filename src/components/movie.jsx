import React from "react";
import Like from "./common/like";

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

export default Movie;
