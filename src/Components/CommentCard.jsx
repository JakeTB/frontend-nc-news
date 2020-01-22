import React, { Component } from "react";

import VoteComments from "./VoteComments";
import DeleteComments from "./DeleteComment";
import axios from "axios";

class CommentCard extends Component {
  state = {
    comment: this.props.comment,
    notDeleted: true
  };
  componentDidMount() {
    this.setState({ comment: this.props.comment });
    console.log(this.state);
  }
  handleDelete = event => {
    const { comment_id, article_id } = this.props;
    console.log("CLICKED");
    console.log(this.props);
    axios
      .delete(
        `https://backendreviewv2.herokuapp.com/api/comments/${comment_id}`
      )
      .then(() => {
        axios
          .get(
            `https://backendreviewv2.herokuapp.com/api/articles/${article_id}/comments`
          )
          .then(({ data: { comments } }) => {
            console.log(comments);
            this.setState({ comment: "", notDeleted: false });
          });
      });
  };

  render() {
    const { title, author, body, article_id, comment_id } = this.state.comment;

    const { votes, notDeleted } = this.state;
    return (
      <div>
        <main key={article_id}>
          {notDeleted && (
            <h3>
              Title:{title} Author:{author}
            </h3>
          )}

          <p>{body}</p>
          {notDeleted && (
            <VoteComments
              comment_id={comment_id}
              article_id={article_id}
              votes={votes}
            />
          )}
          {notDeleted && <button onClick={this.handleDelete}>Delete</button>}
        </main>
      </div>
    );
  }
}

export default CommentCard;
