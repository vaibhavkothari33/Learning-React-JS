// src/components/SearchResults.jsx
import React from 'react';
import BookCard from './BookCard';

function SearchResults({ results, addToBookshelf }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {results.map(book => (
        <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
      ))}
    </div>
  );
}

export default SearchResults;
