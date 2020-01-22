import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import CommentCard from "./CommentCard";
import DeleteComments from "./DeleteComment";

class ArticleComments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { id } = this.props;
    axios
      .get(`https://backendreviewv2.herokuapp.com/api/articles/${id}/comments`)
      .then(({ data: { comments } }) => {
        this.setState({ comments });
      });
  }

  render() {
    const { id } = this.props;

    const { comments } = this.state;
    return (
      <main>
        <nav>
          <Link to={`/articles/singleArticle/${id}/comments/postComment`}>
            <button>Post comment</button>
          </Link>
        </nav>

        {comments.map(comment => {
          const { body, author, votes, comment_id } = comment;
          return (
            <div>
              <CommentCard
                key={comment_id}
                body={body}
                author={author}
                votes={votes}
                comment_id={comment_id}
                article_id={id}
                comment={comment}
              />
            </div>
          );
        })}
      </main>
    );
  }
}

export default ArticleComments;
