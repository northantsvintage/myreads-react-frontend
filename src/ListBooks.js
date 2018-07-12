import React from 'react'
import Bookshelf from './Bookshelf'



// TODO - connect backend api with list books
// get
// getAll
// update
// search
class ListBooks extends React.Component {
  
    render() {
      return (
        <div className="list-books">
        <div className="list-books-title">
        <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <Bookshelf />
        </div>
        <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
        </div>
      );
    }
}


export default ListBooks

 