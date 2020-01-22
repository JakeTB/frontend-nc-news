import React from "react";

import "./App.css";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import ArticlesVotes from "./Components/ArticlesVotes";
import ArticlesDate from "./Components/ArticleDate";
import ErrHandler from "./Components/ErrHandler";

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
        <Articles path="/articles/topic/:topic_id" />

        <Articles path="/articles/sort/:sort_by" />
        <SingleArticle path="/articles/singleArticle/:id/*" />
        <ErrHandler default />
      </Router>
    </div>
  );
}

export default App;
