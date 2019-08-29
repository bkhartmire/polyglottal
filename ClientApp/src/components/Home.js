import React, { Component } from "react";
import Form from "./Form";
import SearchResults from "./SearchResults";
const axios = require("axios");

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  addUnreadBook(title, author) {
    this.setState({
      books: [...this.state.books, { title, author }],
      searchResults: []
    });
  }

  async getResults(title = null, author = null) {
    const resp = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?key=${googleApiKey}&printType=books&q=inauthor:${author}+intitle:${title}&langRestrict=en`
    );
    if (resp.data.items.length > 0) {
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
  }

  render() {
    return (
      <div>
        <h2>Search for new books you'd like to read.</h2>
        <Form getResults={(title, author) => this.getResults(title, author)} />
        <SearchResults
          results={this.state.searchResults}
          addUnreadBook={(title, author) => this.addUnreadBook(title, author)}
        />
      </div>
    );
  }
}
