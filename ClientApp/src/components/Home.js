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
      searchResults: []
    };
  }

  async getResults(title, author) {
    const resp = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?key=${googleApiKey}&printType=books&q=inauthor:${author}+intitle:${title}&langRestrict=en`
    );
    const results = resp.data.items
      .map(item => item.volumeInfo)
      .filter(item => !!item.imageLinks && !!item.imageLinks.smallThumbnail);
    this.setState({ searchResults: results });
  }

  render() {
    return (
      <div>
        <h2>Add a new book to your list.</h2>
        <Form getResults={(title, author) => this.getResults(title, author)} />
        <SearchResults results={this.state.searchResults} />
        <BookList />
      </div>
    );
  }
}
