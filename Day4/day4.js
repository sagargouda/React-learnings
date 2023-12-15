import React from "react";
import ReactDOM from "react-dom/client";

//?? assignments
const header = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "heading1" }, "heading-1"),
  React.createElement("div", { id: "heading2" }, "heading-2"),
  React.createElement("div", { id: "heading-3" }, "headin-3"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
