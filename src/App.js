import React from "react";

import "./App.css";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
      </h1>
      <h2>
        <Navigation />
      </h2>

      <Router>
        <Home path="/" />
        <Articles path="/articles/*" />
        <Articles path="/articles/:topic_id" />
        <SingleArticle path="/articles/singleArticle/:id" />
      </Router>
    </div>
  );
}

export default App;
