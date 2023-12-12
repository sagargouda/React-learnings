import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement(
  "p",
  { id: "sagar" },
  React.createElement("h1", { id: "heading" }, "hey wassgar")
);

const root = ReactDOM.createRoot(document.body);

root.render(header);
