import React from "react";

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page ? "bg-yellow-500 text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} className="px-4 py-2 bg-gray-200 rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
