import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
      </h1>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
