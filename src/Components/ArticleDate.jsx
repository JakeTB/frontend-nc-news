import React, { Component } from "react";
import axios from "axios";

class ArticleDate extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios
      .get(
        "https://backendreviewv2.herokuapp.com/api/articles?sort_by=created_at"
      )
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  }
  render() {
    const { articles } = this.state;

    return (
      <div>
        {" "}
        <h1>Article Date</h1>
        {articles.map(article => {
          let { title, body, author, article_id } = article;

          return (
            <main key={article_id}>
              <h3>
                {title} Author:{author}
              </h3>
              <p>{body}</p>
            </main>
          );
        })}
      </div>
    );
  }
}

export default ArticleDate;
