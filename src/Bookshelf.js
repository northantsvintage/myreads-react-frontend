import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
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
        <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                <Book />
                </ol>
            </div>
            </div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                <Book />
                </li>
                </ol>
            </div>
            </div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                <Book />
                </li>
                </ol>
            </div>
            </div>
        </div>
      ) 
    }
}

export default Bookshelf