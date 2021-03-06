import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

/* 
  BookApp - Parent Component holding state
*/
class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

 /*  immediately after a component is inserted into the dom
      listBookShelf is called
  */
  componentDidMount(){
    this.listBookShelf()
  }


 /*  listBookShelf function makes updates to 
      the Parent component local state
  */
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

  // updateShelf is getting update function from BooksApi
  updateShelf = (book, shelf) => {
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
            <SearchBooks books={this.state.books} onShelfChange={this.updateShelf} /> 
          )}/>
        </div>
      
    )
  }
}

export default BooksApp;