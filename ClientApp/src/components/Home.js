import React, { Component } from "react";
import Form from "./Form";
import BookList from "./BookList";
import SearchResults from "./SearchResults";
const axios = require("axios");

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      books: []
    };
  }

  async componentDidMount() {
    const resp = await axios.get("api/books");
    this.setState({ books: resp.data });
  }

  addBook(title, author) {
    this.setState({
      books: [...this.state.books, { title, author }],
      searchResults: []
    });
  }

  removeBook(id) {
    this.setState({ books: this.state.books.filter(book => book.id !== id) });
  }

  async getResults(title = null, author = null) {
    const resp = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?key=${googleApiKey}&printType=books&q=inauthor:${author}+intitle:${title}&langRestrict=en`
    );
    const results = resp.data.items
      .map(item => item.volumeInfo)
      .filter(
        item =>
          !!item.imageLinks &&
          !!item.imageLinks.smallThumbnail &&
          !!item.authors &&
          item.authors.length > 0
      );
    this.setState({ searchResults: results });
  }

  render() {
    return (
      <div>
        <h2>Add a new book to your list.</h2>
        <Form getResults={(title, author) => this.getResults(title, author)} />
        <SearchResults
          results={this.state.searchResults}
          addBook={(title, author) => this.addBook(title, author)}
        />
        <BookList
          books={this.state.books}
          removeBook={id => this.removeBook(id)}
        />
      </div>
    );
  }
}
