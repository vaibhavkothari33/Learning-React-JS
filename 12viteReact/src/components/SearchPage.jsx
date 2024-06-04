// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        setResults(response.data.docs);
      };
      fetchData();
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
  };

  return (
    <div className="p-4">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults results={results} addToBookshelf={addToBookshelf} />
    </div>
  );
}

export default SearchPage;
