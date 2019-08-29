import React, { Component } from "react";
import Book from "./Book";
import axios from "axios";

export default class UnreadBookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  async componentDidMount() {
    const unread = await axios.get("api/books/false");
    this.setState({ books: unread.data });
  }

  async removeBook(id) {
    debugger;
    this.setState({ books: this.state.books.filter(book => book.id !== id) });
    await axios.delete("/api/books/" + id);
  }

  render() {
    return (
      <div id="book-list">
        <h1>Unread Book List</h1>
        {this.state.books.map(book => (
          <Book
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
            removeBook={id => this.removeBook(id)}
          />
        ))}
      </div>
    );
  }
}
