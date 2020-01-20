import React, { Component } from "react";
import axios from "axios";

class ArticleComments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { article_id } = this.props;
    axios
      .get(
        `https://backendreviewv2.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(({ data: { comments } }) => {
        console.log(comments);
        this.setState({ comments });
      });
  }
  render() {
    const { comments } = this.setState;
    console.log(comments);
    return <main></main>;
  }
}

export default ArticleComments;
