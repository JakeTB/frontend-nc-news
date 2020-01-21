import React, { Component } from "react";
import { Link } from "@reach/router";
import VoteComments from "./VoteComments";

class CommentCard extends Component {
  state = {
    votes: 0
  };
  render() {
    const { title, author, body, article_id, comment_id } = this.props;
    console.log(article_id);
    const { votes } = this.state;
    return (
      <div>
        <main key={article_id}>
          <h3>
            Title:{title} Author:{author}
          </h3>
          <h4>Votes: {votes}</h4>
          <p>{body}</p>
          <VoteComments comment_id={comment_id} article_id={article_id} />
        </main>
      </div>
    );
  }
}

export default CommentCard;
