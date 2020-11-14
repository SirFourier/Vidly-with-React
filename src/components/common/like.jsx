import React from "react";
import PropTypes from "prop-types";

function Like(props) {
  const { movie, onLike } = props;
  let nameOfClass = "fa fa-heart";
  if (!movie.like) nameOfClass += "-o";
  return (
    <i
      onClick={() => onLike(movie)}
      style={{ cursor: "pointer" }}
      className={nameOfClass}
      aria-hidden="true"
    ></i>
  );
}

Like.propTypes = {
  movie: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Like;
