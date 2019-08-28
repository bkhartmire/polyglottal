import React, { Component } from "react";
import Result from "./Result";

export default class SearchResults extends Component {
  componentDidUpdate() {
    this.props.results;
    debugger;
  }
  render() {
    return <h1>Search Results</h1>;
  }
}
