import React, { Component } from "react";
import axios from "axios";

class VoteComments extends Component {
  state = {
    votes: 0
  };
  componentDidMount() {
    const { article_id, comment_id } = this.props;

    axios
      .get(
        `https://backendreviewv2.herokuapp.com/api/articles/${article_id}/comments/`
      )
      .then(({ data: { comments } }) => {
        let correctComment = comments.filter(comment => {
          if (comment.comment_id === comment_id) {
            return comment;
          }
        });
        let votes = correctComment[0].votes;
        this.setState({ votes });
      });
  }
  handleUpvote = event => {
    const { name } = event.target;

    const { comment_id } = this.props;

    axios
      .patch(
        `https://backendreviewv2.herokuapp.com/api/comments/${comment_id}/`,
        { inc_votes: name === "Upvote" ? 1 : -1 }
      )
      .then(() => {
        this.setState(prevState => {
          return {
            votes: name === "Upvote" ? prevState.votes + 1 : prevState.votes - 1
          };
        });
      });
  };

  render() {
    const { votes } = this.state;
    return (
      <div>
        <button
          onClick={this.handleUpvote}
          disabled={votes === 1}
          name="Upvote"
        >
          Upvote
        </button>
        <button
          onClick={this.handleUpvote}
          disabled={votes === -1}
          name="Downvote"
        >
          Downvote
        </button>
        <h3>Votes:{votes}</h3>
      </div>
    );
  }
}

export default VoteComments;
