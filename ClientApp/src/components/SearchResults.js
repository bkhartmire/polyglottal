import React, { Component } from "react";
import Result from "./Result";

export default class SearchResults extends Component {
  render() {
    return (
      <div id="search-results-container">
        {this.props.results.map(result => (
          <Result
            addBook={(title, author) => this.props.addBook(title, author)}
            title={result.title}
            author={result.authors[0]}
            pages={result.pageCount}
            thumbnail={result.imageLinks.smallThumbnail}
            summary={result.description}
            published={result.publishedDate}
          />
        ))}
      </div>
    );
  }
}
