import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = Array.from({ length: 110 }, (_, index) => `Item ${index + 1}`);
  const TotalItemsPerPage = 22;
  const totalPages = Math.ceil(data.length / TotalItemsPerPage);
  const firstIndex = currentPage * TotalItemsPerPage - TotalItemsPerPage;
  const currentItems = data.slice(firstIndex, currentPage * TotalItemsPerPage);
  const handleCurrentPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      <h1>Normal Pagination</h1>
      {currentItems.map((item) => (
        <li>{item}</li>
      ))}
      <button
        onClick={() => handleCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        PREV
      </button>
      <p>
        {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => handleCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
