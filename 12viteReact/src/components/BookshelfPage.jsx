// src/pages/BookshelfPage.jsx
import React, { useEffect, useState } from 'react';
import Bookshelf from './Bookshelf';

function BookshelfPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(bookshelf);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Bookshelf</h2>
      <Bookshelf books={books} />
    </div>
  );
}

export default BookshelfPage;
