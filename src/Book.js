import React, { Component } from 'react'

class Book extends Component {
  state = {
		shelf: this.props.book.shelf
  }

  // this function needs fixing
  bookChange = (event)=> {
    // let shelf = event.target.value
    this.setState({shelf: event.target.value})
    this.props.onShelfChange(this.props.book, event.target.value)
  }
  
  render() {
    const book = this.props.book
    console.log(this.props.book.shelf);
    return (
        <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.state.shelf} onChange={this.bookChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
        </li>
      )}
  }
     



export default Book