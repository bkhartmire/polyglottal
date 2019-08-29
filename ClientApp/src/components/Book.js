import React, { Component } from "react";
import deleteIcon from "../images/delete.jpg";
import "./Book.css";

export default class Book extends Component {
  render() {
    return (
      <div className="book">
        <img
          className="thumbnail"
          src={this.props.thumbnail}
          alt="book cover"
        />
        <h5 className="title">{this.props.title}</h5>
        {this.props.removeBook && (
          <img
            onClick={() => this.props.removeBook(this.props.id)}
            className="delete"
            src={deleteIcon}
            alt="remove from list"
          />
        )}
        <p className="author">by {this.props.author}</p>
      </div>
    );
  }
}
