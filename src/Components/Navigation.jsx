import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import "../style.css";

class Navigation extends Component {
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
      <div className="navigation-bar">
        <ul>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles/">All articles</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            {topics.map(topic => {
              let { slug } = topic;
              return (
                <Link key={slug} to={`/articles/${slug}/`}>
                  <li key={slug}>{slug}</li>
                </Link>
              );
            })}
          </nav>
        </ul>
      </div>
    );
  }
}

export default Navigation;
