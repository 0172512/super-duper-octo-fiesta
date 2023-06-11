import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// majority of app based on https://github.com/mdn/todo-react tutorial and code.
//ooooh im documenting

const DATA = JSON.parse(localStorage.getItem("tasks") || "[]");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
