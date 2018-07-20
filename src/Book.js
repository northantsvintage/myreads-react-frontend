import React, { Component } from 'react'
/* 
this component is displaying how the book should look like and
state of it depeneding on user choice
*/
class Book extends Component {
  state = {
		value: this.props.book.shelf ? this.props.book.shelf : 'none'
  }

  /* 
  this will change the state of the shelf
  onShelfChange comes from App.js and it is calling updateShelf
  which communicates with BookAPI and then calls listBookShelf to
  sets the state of books
   */
  bookChange = (event) => {

    this.setState({shelf: event.target.value})
    this.props.onShelfChange(this.props.book, event.target.value)
  }
  
  render() {
    const book = this.props.book
    const authors = this.props.book.authors || []
    const thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''

    const authorsList = authors.map((author) => {
      return <div key={author}>{author}</div>
    })

    return (
        <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.state.value} onChange={this.bookChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{authorsList}</div>
            </div>
        </li>
      )}
  }



export default Book