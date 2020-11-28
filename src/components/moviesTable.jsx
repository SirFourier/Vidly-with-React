import React, { Component } from "react";
import auth from "../services/authService";
import Table from "./common/table";
import Like from "./common/like";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like movie={movie} onLike={this.props.onLike}></Like>
      ),
    },
    {
      key: "delete",
      content: auth.getCurrentUser()
        ? (movie) => (
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(movie)}
            >
              Delete
            </button>
          )
        : null,
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        items={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortColumn: PropTypes.object.isRequired,
};

export default MoviesTable;
