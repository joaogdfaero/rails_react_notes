import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import {App} from "./components/App"
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)
