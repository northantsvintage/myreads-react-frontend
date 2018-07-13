import React, { Component } from 'react'
import StringRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
	state = {
		searchText: ''
	}

	searchTextUpdate=(text)=>{
	  this.setState({searchText: text.trim()})
	}

	render() {

		let showingBooks
        if(this.state.searchText){
            const match = new RegExp(StringRegExp(this.state.searchText), 'i')
            showingBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors))
        }
        else{
            showingBooks = this.props.books
        }

		return(
			<div className="search-books">
				<div className="search-books-bar">
				  <Link className="close-search" to="/">Close</Link>      
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"
                value={this.state.searchText}
                onChange={(event)=>this.searchTextUpdate(event.target.value)}
              />
            </div>
	              
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book=>
                <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select onChange={(event)=>this.props.onUpdateShelf(book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading" selected={book.shelf==="currentlyReading"}>Currently Reading</option>
                            <option value="wantToRead" selected={book.shelf==="wantToRead"}>Want to Read</option>
                            <option value="read" selected={book.shelf==="read"}>Read</option>
                            <option value="none" selected={book.shelf==="none"}>None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
              )}
          </ol>
        </div>
      </div>
		)
	}
}

export default SearchBooks;