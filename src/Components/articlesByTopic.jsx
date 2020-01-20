import React, { Component } from "react";
import axios from "axios";

class articlesByTopic extends Component {
  componentDidUpdate() {
    axios.get("https://backendreviewv2.herokuapp.com/api/articles?topic=");
  }
  render() {
    return <div></div>;
  }
}

export default articlesByTopic;
