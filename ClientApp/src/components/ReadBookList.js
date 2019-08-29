import React, { Component } from "react";
import Book from "./Book";
import axios from "axios";

export default class ReadBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    const read = await axios.get("api/books/true");
    this.setState({ books: read.data });
  }

  render() {
    return (
      <div id="book-list">
        <h1>Read Book List</h1>
        {this.state.books.map(book => (
          <Book
            title={book.title}
            author={book.author}
            key={book.id}
            thumbnail={book.thumbnail}
            id={book.id}
          />
        ))}
      </div>
    );
  }
}
