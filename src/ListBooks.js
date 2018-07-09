import React from 'react'
import Book from './Book'



// TODO - connect backend api with list books
// get
// getAll
// update
// search
class ListBooks extends React.Component {
    // state = {
    //     books: []
    // }
    
    //   componentDidMount() {
    //    BooksAPI.getAll().then((books) => {
    //        this.setState({ book })
    //    })
    //   }

    
    // none
  
    render() {
      return (
        <div className="list-books">
        <div className="list-books-title">
        <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {/* <li>{this.props.books.url}</li> */}
                </ol>
            </div>
            </div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                {/* <Book bookapi={bookapi}/> */}
                </li>
                </ol>
            </div>
            </div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                {/* <Book bookapi={bookapi}/> */}
                </li>
                </ol>
            </div>
            </div>
        </div>
        </div>
        <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
        </div>
      );
    }
}


export default ListBooks

 