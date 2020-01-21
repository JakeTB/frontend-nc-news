import React, { Component } from "react";
import axios from "axios";
import { Link, Router } from "@reach/router";
import ArticleComments from "./ArticleComments";
import PostComment from "./PostComment";
class SingleArticle extends Component {
  state = {
    singleArticle: {}
  };
  componentDidMount() {
    const { id } = this.props;

    axios
      .get(`https://backendreviewv2.herokuapp.com/api/articles/${id}`)
      .then(({ data: { article } }) => {
        let singleArticle = article[0];
        this.setState({ singleArticle });
      });
  }
  render() {
    let { id } = this.props;
    const { singleArticle } = this.state;
    const { title, body, topic, author } = singleArticle;
    return (
      <div>
        <h1>{title}</h1>
        <h3>
          Topic: {topic}
          Author: {author}
        </h3>
        <p>{body}</p>
        <nav>
          <Link to={`/articles/singleArticle/${id}/comments`}>
            <button>View Comments</button>
          </Link>
        </nav>
        <Router>
          <ArticleComments path="/comments/*" />
          <PostComment path="/comments/postComment" />
        </Router>
      </div>
    );
  }
}

export default SingleArticle;
