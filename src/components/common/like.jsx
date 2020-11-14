import React from "react";

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

export default Like;
