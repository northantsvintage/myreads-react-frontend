import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
 
class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount(){
    this.listBookShelf()
  }

  // listBookShelf is populating changed state from API
  listBookShelf(){
    BooksAPI.getAll().then((books) => {
        this.setState({ 
          books:books,
          currentlyReading: books.filter((book) => book.shelf==='currentlyReading'),
          wantToRead: books.filter((book) => book.shelf==='wantToRead'),
          read: books.filter((book) => book.shelf==='read')
        })
      })
  }

  // updateShelf is getting update function from BooksApi and using listBookShelf
  // to populate it with Books
  updateShelf = (book, shelf) => {
    console.log("inside update")
    BooksAPI.update(book, shelf).then((books) => {
      this.listBookShelf()
    })
  }

  render() {
    return (
        <div>
          <Route exact path="/" render={() => (
            <ListBooks books={this.state.books} onUpdateBook={this.updateShelf} />
          )}/>

          <Route path="/search" render={({ history }) => (
            <SearchBooks books={this.state.books} onUpdateShelf={this.updateShelf} /> 
          )}/>
        </div>
      
    )
  }
}

export default BooksApp;