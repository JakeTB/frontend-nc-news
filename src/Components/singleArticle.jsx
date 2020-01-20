import React, { Component } from "react";
import axios from "axios";
class singleArticle extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    axios.get("https://backendreviewv2.herokuapp.com/api/articles/");
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default singleArticle;
