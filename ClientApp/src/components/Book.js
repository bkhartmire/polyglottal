import React, { Component } from "react";
import deleteIcon from "../images/delete.jpg";
import "./Book.css";
const axios = require("axios");

export default class Book extends Component {
  async handleClick() {
    this.props.removeBook(this.props.id);
    await axios.delete("/api/books/" + this.props.id);
  }
  render() {
    return (
      <div className="book">
        <h5 className="title">{this.props.title}</h5>
        <img
          onClick={this.handleClick.bind(this)}
          className="delete"
          src={deleteIcon}
          alt="remove from list"
        />
        <p className="author">by {this.props.author}</p>
      </div>
    );
  }
}
