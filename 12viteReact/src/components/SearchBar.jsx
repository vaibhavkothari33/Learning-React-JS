// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ query, setQuery }) {
  return (
    <input
      className="border p-2 mt-4 w-full"
      type="text"
      placeholder="Search for books"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
