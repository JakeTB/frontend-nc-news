import React, { Component } from "react";
import axios from "axios";
import { Router, Link } from "@reach/router";

import SingleArticle from "./SingleArticle";
import ArticlesVotes from "./ArticlesVotes";
import ArticleDate from "./ArticleDate";
import ArticleCard from "./ArticleCard";
import ErrHandler from "./ErrHandler";

class Articles extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    console.log(this.props);
    const sort_by = this.props;
    axios
      .get("https://backendreviewv2.herokuapp.com/api/articles/")
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const { topic_id } = this.props;

    if (topic_id !== prevProps.topic_id) {
      let topic = topic_id;

      axios
        .get(`https://backendreviewv2.herokuapp.com/api/articles`, {
          params: { topic }
        })
        .then(({ data: { articles } }) => {
          this.setState({ articles });
        });
    }
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <Router>
          <SingleArticle path="/singleArticle/:article_id/" />
          <SingleArticle path="/singleArticle/:article_id/*" />
          <ArticlesVotes path="/votes" />
          <ArticleDate path="/date" />
        </Router>
        <h1>Articles</h1>
        <nav>
          <Link to="/articles/date">
            <button>Sort by date created</button>
          </Link>
          <Link to="/articles/votes">
            <button>Sort by votes</button>
          </Link>
        </nav>
        <ul>
          {articles.map(({ title, author, body, article_id, votes }) => {
            return (
              <ArticleCard
                key={article_id}
                title={title}
                author={author}
                body={body}
                article_id={article_id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
