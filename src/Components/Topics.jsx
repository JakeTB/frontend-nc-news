import React, { Component } from "react";
import axios from "axios";
import { Router, Link } from "@reach/router";
import articlesByTopic from "./articlesByTopic";
class Topics extends Component {
  state = {
    topics: []
  };
  componentDidMount() {
    axios
      .get("https://backendreviewv2.herokuapp.com/api/topics/")
      .then(({ data: { topics } }) => {
        this.setState({ topics });
      });
  }
  render() {
    const { topics } = this.state;
    return (
      <div>
        <h1>Topics</h1>
        <h2>View articles related to</h2>
        <nav>
          <Link to="/articles/coding">
            <button>Coding</button>
          </Link>
          <Link to="/articles/football">
            <button>Football</button>
          </Link>
          <Link to="/articles/cooking">
            <button>Cooking</button>
          </Link>
        </nav>

        <ul>
          {topics.map(topic => {
            return (
              <li key={topic.slug}>
                {topic.slug}: {topic.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
