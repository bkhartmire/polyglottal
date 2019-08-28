import React, { Component } from "react";
import "./Result.css";

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <img class="thumbail" src={this.props.thumbnail} alt="book cover" />
        <div class="result-info">
          <h5>{this.props.title}</h5> <button title="Add to List">+</button>
          <p>By {this.props.author}</p>
          <p>
            {this.props.published} - {this.props.pages} pages
          </p>
          <div class="summary">
            <p>{this.props.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}
