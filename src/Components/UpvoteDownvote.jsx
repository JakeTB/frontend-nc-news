import React, { Component } from "react";
import axios from "axios";

class UpvoteDownvote extends Component {
  state = {
    votes: 0,
    NotVotedUp: true,
    NotVotedDown: true
  };
  componentDidMount() {
    const { article_id } = this.props;
    axios
      .get(`https://backendreviewv2.herokuapp.com/api/articles/${article_id}/`)
      .then(({ data: { article } }) => {
        let votes = article[0].votes;
        this.setState({ votes });
      });
  }
  handleUpvote = event => {
    const { name } = event.target;
    const { article_id } = this.props;

    axios
      .patch(
        `https://backendreviewv2.herokuapp.com/api/articles/${article_id}/`,
        { inc_votes: name === "Upvote" ? 1 : -1 }
      )
      .then(() => {
        this.setState(prevState => {
          return {
            NotVotedUp: name === "Upvote" ? false : true,
            NotVotedDown: name === "Downvote" ? false : true,
            votes: name === "Upvote" ? prevState.votes + 1 : prevState.votes - 1
          };
        });
      });
  };

  render() {
    let { votes, NotVotedUp, NotVotedDown } = this.state;
    console.log(this.state);
    return (
      <div>
        <button
          onClick={this.handleUpvote}
          disabled={NotVotedUp === false}
          name="Upvote"
        >
          Upvote
        </button>

        <button
          onClick={this.handleUpvote}
          disabled={NotVotedDown === false}
          name="Downvote"
        >
          Downvote
        </button>
        <h3>Votes:{votes}</h3>
      </div>
    );
  }
}

export default UpvoteDownvote;
