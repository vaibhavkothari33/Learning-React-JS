// src/components/Bookshelf.jsx
import React from 'react';
import BookCard from './BookCard';

function Bookshelf({ books }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {books.map(book => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default Bookshelf;
