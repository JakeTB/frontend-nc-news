import React, { Component } from "react";
import axios from "axios";

class PostComment extends Component {
  state = {
    comment: "",
    user: "jessjelly",
    newComment: "",
    commentPosted: false
  };
  hanldeSumbitClick = event => {
    event.preventDefault();

    const { comment, user, commentPosted } = this.state;
    const { id } = this.props;

    axios
      .post(
        `https://backendreviewv2.herokuapp.com/api/articles/${id}/comments/`,
        { username: user, body: comment }
      )
      .then(response => {
        this.setState({
          newComment: comment,
          commentPosted: true,
          comment: ""
        });
      });
  };
  hanldeComment = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { newComment, commentPosted, user } = this.state;
    return (
      <div>
        {commentPosted && <h3>Author:{user}</h3>}
        {commentPosted && <p>{newComment}</p>}
        <form name="postCommentForm">
          Post Comment{" "}
          <input type="text" name="comment" onChange={this.hanldeComment} />
          <input
            type="button"
            onClick={this.hanldeSumbitClick}
            value="Sumbit"
          />
        </form>
      </div>
    );
  }
}

export default PostComment;
