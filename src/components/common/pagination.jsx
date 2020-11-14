import React from "react";

function Pagination({ totalItems, itemsPerPage, currentPage, onPage }) {

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  let pages = [];
  for (let page = 1; page <= numberOfPages; ++page) {
    if (page === currentPage) {
      pages.push(
        <li key={page} className="page-item active">
          <span className="page-link">{page}</span>
        </li>
      );
    } else {
      pages.push(
        <li key={page} className="page-item">
          <button className="page-link" onClick={() => onPage(page)}>
            {page}
          </button>
        </li>
      );
    }
  }
  return (
    <nav>
      <ul className="pagination">{pages}</ul>
    </nav>
  );
}

export default Pagination;
