import React, { Component } from "react";
import "./Result.css";
const axios = require("axios");

export default class Result extends Component {
  async handleClick(e) {
    e.preventDefault();
    await axios.post("api/books", {
      title: this.props.title,
      author: this.props.author,
      summary: this.props.summary,
      thumbnail: this.props.thumbnail,
      pages: this.props.pages,
      published: this.props.published
    });
  }
  render() {
    return (
      <div className="result">
        <img className="thumbail" src={this.props.thumbnail} alt="book cover" />
        <div className="result-info">
          <h5>{this.props.title}</h5>{" "}
          <button title="Add to List" onClick={this.handleClick.bind(this)}>
            +
          </button>
          <p>By {this.props.author}</p>
          <p>
            {this.props.published} - {this.props.pages} pages
          </p>
          <div className="summary">
            <p>{this.props.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}
