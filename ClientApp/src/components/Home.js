import React, { Component } from "react";
import Form from "./Form.js";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h2>Add a new book to your list.</h2>
        <Form />
      </div>
    );
  }
}
