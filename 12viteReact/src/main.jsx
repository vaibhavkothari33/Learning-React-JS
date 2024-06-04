import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import SearchPage from './components/BookCard'
import BookshelfPage from './components/BookCard'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { Outlet } from 'react-router-dom';
import BookCard from './components/BookCard';
import Bookshelf from './components/Bookshelf';
import SearchResults from './components/SearchResults';
import SearchPage from './components/SearchPage';
import './index.css';

// import Layout from './Layout';
function Layout({ children }) {
  return (
    <div>
      <Header />

      <SearchBar />
      <SearchPage />
      <Outlet />
      <BookCard />
      <Bookshelf />
      <BookshelfPage />
      <SearchResults />
      <main>{children}</main>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route path="bookshelf" element={<BookshelfPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
