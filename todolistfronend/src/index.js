import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
