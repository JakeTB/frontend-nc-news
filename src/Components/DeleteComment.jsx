import React, { Component } from "react";
import axios from "axios";

class DeleteComments extends Component {
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
        this.setState({ comments });
      });
  }
  handleDelete = event => {
    const { comment_id, article_id } = this.props;

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
            this.setState({ comments });
          });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
export default DeleteComments;
