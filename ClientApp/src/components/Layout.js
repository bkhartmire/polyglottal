import React, { Component } from "react";
import { Container } from "reactstrap";
import "./Layout.css";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div id="layout">
        <NavMenu />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
