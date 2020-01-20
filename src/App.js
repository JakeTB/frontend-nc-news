import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";

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
        <Articles path="/articles/byTopic/:topic" />
        <Topics path="/topics/" />
      </Router>
    </div>
  );
}

export default App;
