import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  displayBooks(category) {
    const books = this.props.books
    return books.filter(book => book.shelf === category).map(book => (
      <Book key={book.id} book={book} onShelfChange={this.props.onUpdateBook}/>
    ))
  }

	render() {
	  return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" listOfBooks={this.displayBooks("currentlyReading")}/>
                <Bookshelf title="Want to Read" listOfBooks={this.displayBooks("wantToRead")} />
                <Bookshelf title="Read" listOfBooks={this.displayBooks("read")} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
          </div>
		)
	}
}

export default ListBooks;