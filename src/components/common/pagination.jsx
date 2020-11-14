import React from "react";
import PropTypes from "prop-types";

function Pagination({ totalItems, itemsPerPage, currentPage, onPage }) {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  // Create empty array that will store page buttons that are either clickable or unclickable
  const pages = [];
  for (let page = 1; page <= numberOfPages; ++page) {
    pages.push(
      <li
        key={page}
        className={page === currentPage ? "page-item active" : "page-item"}
      >
        {page === currentPage ? (
          <span className="page-link">{page}</span>
        ) : (
          <button className="page-link" onClick={() => onPage(page)}>
            {page}
          </button>
        )}
      </li>
    );
  }
  if (pages.length === 1) return null;
  return (
    <nav>
      <ul className="pagination">{pages}</ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPage: PropTypes.func.isRequired,
};

export default Pagination;
