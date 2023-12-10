// building hello world using javascript
//!! 1st example
// const heading1 = document.createElement("h1");
// heading1.innerHTML = "hello world from javascript";

// const root = document.getElementById("root");
// root.appendChild(heading1);
//!! 2nd example
// const divy = document.createElement("div");
// const h1 = document.createElement("h4");
// h1.innerHTML = "Hey sagar";

// divy.appendChild(h1);
// document.body.appendChild(divy);

//!! 3rd example
// Create a paragraph (<p>) element with the text "Hello, world!" and append it to the body of the document.

// const para = document.createElement("p");
// const heading = document.createElement("h1");
// heading.innerHTML = "exercise 1";

// para.appendChild(heading);
// document.body.appendChild(para);

//!! 4th example
// Create an ordered list (<ol>) with three list items (<li>) containing the text "Item 1," "Item 2," and "Item 3." Append the list to the body.

// const ordered = document.createElement("ol");
// for (let i = 1; i <= 3; i++) {
//   const items = document.createElement("li");

//   items.innerHTML = "Item" + i;
//   ordered.appendChild(items);
// }

// document.body.appendChild(ordered);

//////////////////////////////////////////////////////////////////////////////

// Building hello world using react
// const heading = React.createElement("h1", {}, "hey sagar you know what im sayin");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement("h1", { id: "sagar" }, "hey sagar ");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// how to write nested structure and also siblings
// {
/* <div>
<div>
<h1>
</h1>
</div>
</div> */
// }

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.body);
root.render(parent);
