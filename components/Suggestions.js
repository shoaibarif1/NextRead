import React from "react";

const Suggestions = ({ suggestions }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-white">Book Suggestions</h2>
      {suggestions.map((book, index) => (
        <div key={index} className="border rounded p-2 mb-2 flex items-center">
          {book.image && (
            <img src={book.image} alt={book.title} className="w-16 h-24 mr-4" />
          )}
          <div>
            <h3 className="text-md font-semibold text-white">{book.title}</h3>
            <p className="text-sm text-white">{book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
