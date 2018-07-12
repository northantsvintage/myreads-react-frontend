import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // move method
    // currentlyReading
    // wantToRead
    // read
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  updateShelf = (book, shelf) => {
    console.log('update shelf');
    BooksAPI.update(book, shelf).then((books) => {
      this.listBooks();
    })
  }

  listBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
        currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
        wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
        read: books.filter((book) => book.shelf === 'read')
      })
    })
  }

  render() {
    return (
      <div className = "app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
        //  <ListBooks books={books} />
        <ListBooks currentlyReading = {this.state.currentlyReading} 
        wantToRead = {this.state.wantToRead} 
        read = {this.state.read} 
        onUpdateShelf = {this.updateShelf} />
        )}
      </div>
    )
  }
}

export default BooksApp
