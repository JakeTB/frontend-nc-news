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
    const { comments } = this.state;
    return (
      <main>
        {comments.map(comment => {
          const { body, author, votes } = comment;
          return (
            <main>
              <h3>
                {author} Votes: {votes}
              </h3>
              <p>{body}</p>
            </main>
          );
        })}
      </main>
    );
  }
}

export default ArticleComments;
