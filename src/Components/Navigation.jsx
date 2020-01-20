import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";

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
      <div>
        <ul className="NavigationBar">
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
                <Link to={`/articles/byTopic/${slug}`}>
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
