import React, { Component } from "react";
import deleteIcon from "../images/delete.jpg";
import "./Book.css";

export default class Book extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.markRead(this.props.id);
  }
  render() {
    return (
      <div className="book">
        <img
          className="thumbnail"
          src={this.props.thumbnail}
          alt="book cover"
        />
        <h5 className="title">{this.props.title}</h5>
        <p className="author">by {this.props.author}</p>
        {this.props.removeBook && (
          <div className="book-events">
            <button onClick={this.handleClick.bind(this)}>Mark Read</button>
            <img
              onClick={() => this.props.removeBook(this.props.id)}
              className="delete"
              src={deleteIcon}
              alt="remove from list"
            />
          </div>
        )}
      </div>
    );
  }
}
