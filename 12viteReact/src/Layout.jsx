import React from 'react'
import Header from './components/Header'
import SearchPage from './components/BookCard'
import BookshelfPage from './components/BookCard'
import { Outlet } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import SearchPage from './components/SearchPage'
import SearchResults from './components/SearchResults'
import BookCard from './components/BookCard'
import Bookshelf from './components/Bookshelf'

function Layout() {
    return (
        <>
            <Header />
            <SearchBar />
            <SearchPage />
            <Outlet />
            <BookCard />
            <Bookshelf />
            <BookshelfPage />
            <SearchResults/>


        </>
    )
}

export default Layout