import React, { Component } from "react";
import axios from "axios";

class PostComment extends Component {
  state = {
    comment: "",
    user: "jessjelly"
  };
  hanldeSumbitClick = event => {
    event.preventDefault();

    const { comment, user } = this.state;
    const { id } = this.props;

    axios
      .post(
        `https://backendreviewv2.herokuapp.com/api/articles/${id}/comments/`,
        { username: user, body: comment }
      )
      .then(response => {
        console.log("hello");
      });
  };
  hanldeComment = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
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
