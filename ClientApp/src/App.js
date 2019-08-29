import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import ReadBookList from "./components/ReadBookList";
import UnreadBookList from "./components/UnreadBookList";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/readbooks" component={ReadBookList} />
        <Route path="/unreadbooks" component={UnreadBookList} />
      </Layout>
    );
  }
}
