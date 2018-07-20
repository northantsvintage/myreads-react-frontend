import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class SearchBooks extends Component {
  state = {
    value: '',
    searchResults: [],
  };

  /* 
  searchBooks function connects with BooksAPI and
  sets the state as searchResults
  searchResults is then used in handleChange event
  */
  searchBooks = () => {
    BooksAPI.search(this.state.value, 20)
      .then(searchResults => {
        const newSearchResults = searchResults.map(result => {
          const index = this.props.books.find(book => {
            return book.id === result.id;
          });

          if (index !== undefined) {
            return index;
          } else {
            return { ...result, shelf: 'none' };
          }
        });
        return newSearchResults;
      })
      .then(searchResults => {
        this.setState({
          searchResults,
        });
      })
      .catch(() => {
        this.setState({
          searchResults: [],
        });
      });
  };

  /* 
  handleChange event calls searchBooks function for search terms
  changing the state of the app
  */
  handleChange = event => {
    const searchTerm = event.target.value;

    this.setState(
      {
        value: event.target.value,
      },
      () => {
        if (searchTerm !== '') {
          this.searchBooks();
        } else {
          this.setState({
            searchResults: [],
          });
        }
      },
    );
  };

  render() {
    /* bookList is the result of the search */
    const booksList =
      this.state.searchResults.length === 0
        ? <li key="no-results">No results</li>
        : this.state.searchResults.map(book => {
          return (
            <li key={book.id}>
              <Book book={book} onShelfChange={this.props.onShelfChange} />
            </li>
          );
        });
    /* it displays input search field and results of it */
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksList}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;