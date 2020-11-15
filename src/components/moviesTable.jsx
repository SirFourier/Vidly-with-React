import React from "react";
import Movie from "./movie";
import NewMovie from "./newMovie";

function MoviesTable({
  paginatedMovies,
  firstIndex,
  newMovie,
  onDelete,
  onLike,
  onNewMovieChange,
  onAdd,
  onSort,
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th onClick={() => onSort("title")} scope="col">Title</th>
          <th onClick={() => onSort("genre.name")} scope="col">Genre</th>
          <th onClick={() => onSort("numberInStock")} scope="col">Stock</th>
          <th onClick={() => onSort("dailyRentalRate")} scope="col">Rate</th>
          <th scope="col">Like</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {paginatedMovies.map((movie, index) => (
          <Movie
            key={movie._id}
            movie={movie}
            onDelete={onDelete}
            onLike={onLike}
            index={firstIndex + index}
          ></Movie>
        ))}
        <NewMovie
          onChange={onNewMovieChange}
          onAdd={onAdd}
          newMovie={newMovie}
          onLike={onLike}
        ></NewMovie>
      </tbody>
    </table>
  );
}

export default MoviesTable;
