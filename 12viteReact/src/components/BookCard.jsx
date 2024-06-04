// src/components/BookCard.jsx
import React from 'react';

function BookCard({ book, addToBookshelf }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown author'}</p>
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
        onClick={() => addToBookshelf(book)}
      >
        Add to Bookshelf
      </button>
    </div>
  );
}

export default BookCard;
