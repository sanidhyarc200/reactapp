// components/Pagination.js
import React from 'react';

const Pagination = ({ todos, todosPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(todos.length / todosPerPage);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <li
        key={pageNumber}
        className={pageNumber === currentPage ? 'active' : ''}
      >
        <button onClick={() => handleClick(pageNumber)}>{pageNumber}</button>
      </li>
    ));
  };

  return (
    <nav>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
};

export default Pagination;
