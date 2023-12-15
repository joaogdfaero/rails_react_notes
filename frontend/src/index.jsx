import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import { App } from "./components/App.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppState } from "./AppState.jsx";

const root = createRoot(document.querySelector("#root"));
root.render(
  <AppState>
    <Router>
      <App/> 
    </Router>
  </AppState>
);

