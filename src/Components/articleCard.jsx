import React, { Component } from "react";

class articleCard extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    console.log("Hello");
  }
  render() {
    let(article) = this.props;

    return <li>{article}</li>;
  }
}

export default articleCard;
