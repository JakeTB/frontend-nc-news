import React, { Component } from "react";
import { Link } from "@reach/router";
import UpvoteDownvote from "./UpvoteDownvote";

class ArticleCard extends Component {
  state = {
    votes: 0
  };

  render() {
    const { title, author, body, article_id } = this.props;
    const { votes } = this.state;
    return (
      <div>
        <main>
          <nav>
            <h3>
              <Link
                to={`/articles/singleArticle/${article_id}`}
                key={article_id}
              >
                Title:{title} Author:{author}
              </Link>
            </h3>
          </nav>
        </main>
        <main>
          <p>{body}</p>
          <UpvoteDownvote votes={votes} article_id={article_id} />
        </main>
      </div>
    );
  }
}

export default ArticleCard;
