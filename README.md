# MyReads Project

This is MyReads project for Udacity Front End NanoDegree

## How to run app

npm install

npm start

You can search for books, select which ones you want to read or which one you are currently reading or already read.
You can perfom search and select the book you want to read, currently reading or the one you already read.
Books will be removed from the shelf and put on the appropriate one

## How to use the App

With this app you manage the state of a list of books. You have the choice between: "Currently Reading", "Want to read" and "read".

You can see the state of the books in the main page (path: "/").

You can search for new books in the "/search" page.

Arrow on the top left on the search page enables you to go back to the main page and see the result of selected choices.

To make selections use the right click option to choose Reading, Want to, Read and None and books will be moved to another shelf.

None allows you remove the book from each shelf.

### How App works

## Backend Server

To simplify development process, there is backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



