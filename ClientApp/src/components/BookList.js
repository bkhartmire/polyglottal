import React, { Component } from "react";
import Book from "./Book";

export default class BookList extends Component {
  render() {
    return (
      <div id="book-list">
        <h1>Book List</h1>
        {this.props.books.map(book => (
          <Book
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
            removeBook={id => this.props.removeBook(id)}
          />
        ))}
      </div>
    );
  }
}
