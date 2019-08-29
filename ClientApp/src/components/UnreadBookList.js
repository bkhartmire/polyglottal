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
    this.setState({ books: this.state.books.filter(book => book.id !== id) });
    await axios.delete("api/books/" + id);
  }

  async markRead(id) {
    this.setState({ books: this.state.books.filter(book => book.id !== id) });
    await axios.put("api/books/" + id, {
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      summary: this.props.summary,
      thumbnail: this.props.thumbnail,
      pages: this.props.pages,
      published: this.props.published,
      read: true
    });
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
            thumbnail={book.thumbnail}
            removeBook={id => this.removeBook(id)}
            markRead={id => this.markRead(id)}
          />
        ))}
      </div>
    );
  }
}
