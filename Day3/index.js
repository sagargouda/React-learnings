import React from "react";
import ReactDOM from "react-dom";

function MyButton() {
  return (
    <button>
      <a href="https://chat.openai.com/c/bcd33cf8-a967-489b-9770-5fd948b9dc98">
        Visit
      </a>
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MyButton></MyButton>);
