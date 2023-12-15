import React from "react";

const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (Math.ceil(totalRows / rowsPerPage) === 0) {
    pageNumbers.push(1);
  }

  return (
    <nav className="pagination-wrapper">
      <div className="pagination">
        <div>
          <button
            disabled={currentPage === 1}
            className="first-page page-btn-skip"
            onClick={() => paginate(1)}
          >
            {`<<`}
          </button>
        </div>
        <div>
          <button
            disabled={currentPage === 1}
            className="previous-page page-btn-skip"
            onClick={() => paginate(currentPage - 1)}
          >
            {`<`}
          </button>
        </div>
        {pageNumbers.map((number) => (
          <div key={number}>
            <button
              onClick={() => paginate(number)}
              className={
                currentPage === number ? "page-btn active" : "page-btn"
              }
            >
              {number}
            </button>
          </div>
        ))}
        <div>
          <button
            disabled={
              currentPage === Math.ceil(totalRows / rowsPerPage) ||
              Math.ceil(totalRows / rowsPerPage) === 0
            }
            className="next-page page-btn-skip"
            onClick={() => paginate(currentPage + 1)}
          >
            {`>`}
          </button>
        </div>
        <div>
          <button
            disabled={
              currentPage === Math.ceil(totalRows / rowsPerPage) ||
              Math.ceil(totalRows / rowsPerPage) === 0
            }
            className="last-page page-btn-skip"
            onClick={() => paginate(Math.ceil(totalRows / rowsPerPage))}
          >
            {`>>`}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;