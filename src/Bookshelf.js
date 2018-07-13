import React from 'react'

function Bookshelf(props) {
    return (
        <div className="bookshelf">

           <h2 className="bookshelf-title">{props.title}</h2>

           <div className="bookshelf-books">
              <ol className="books-grid">
                 
                 {props.listOfBooks}
              </ol>
           </div>

        </div>
     )
}

export default Bookshelf