import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: ""
    };
  }

  handleChange(e) {
    const field = e.target.name;
    field === "title"
      ? this.setState({ title: e.target.value })
      : this.setState({ author: e.target.value });
  }

  handleSubmit(e) {
    this.preventDefault();
    const body = { title: this.state.title, author: this.state.author };
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          onChange={e => this.handleChange(e)}
          name="title"
          placeholder="title"
          type="text"
        />
        <input
          onChange={e => this.handleChange(e)}
          name="author"
          placeholder="author"
          type="text"
        />
        <input type="submit" />
      </form>
    );
  }
}
