import React, { Component } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import articlesByTopic from "./articlesByTopic";

class Articles extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios
      .get("https://backendreviewv2.herokuapp.com/api/articles/")
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (topic !== prevProps.topic) {
      console.log(topic);
      axios
        .get(
          `https://backendreviewv2.herokuapp.com/api/articles?topic=${topic}`
        )
        .then(({ data: { articles } }) => {
          console.log(articles);
          this.setState({ articles });
        });
    }
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles</h1>
        <ul>
          {articles.map(article => {
            let { article_id, title } = article;
            return <li key={article_id}>{title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
