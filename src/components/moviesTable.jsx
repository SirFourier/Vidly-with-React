import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Movie from "./movie";
import PropTypes from "prop-types";

class MoviesTable extends Component {
  columns = [
    { key: "number" },
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  render() {
    const {
      paginatedMovies,
      firstIndex,
      onDelete,
      onLike,
      onSort,
      sortColumn,
    } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        ></TableHeader>
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
        </tbody>
      </table>
    );
  }
}

MoviesTable.propTypes = {
  paginatedMovies: PropTypes.array.isRequired,
  firstIndex: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortColumn: PropTypes.object.isRequired,
};

export default MoviesTable;
