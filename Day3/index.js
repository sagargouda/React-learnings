import React from "react";
import ReactDOM from "react-dom/client";

// react fucntional component
// function MyButton() {
//   return (
//     <button>
//       <a href="https://chat.openai.com/c/bcd33cf8-a967-489b-9770-5fd948b9dc98">
//         Visit
//       </a>
//     </button>
//   );
// }

// react funcitonal component with arrow fucntion
// const Title = () => <p>Hey sagar wastup</p>;

// const Heading = () => (
//   <div>
//     <Title />
//     <h1 className="sagar">Wassup</h1>
//   </div>
// );

// using {}

// const Heading = () => (
//   <div>
//     <h1>hey sagar</h1>
//   </div>
// );
// const num = (
//   <h1 style={{ backgroundColor: "red" }}>
//     <Heading />
//   </h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(<Heading></Heading>);
// root.render(num);

//?? assignments
//?? 1. using react create element
// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("div", { id: "heading1" }, "heading-1"),
//   React.createElement("div", { id: "heading2" }, "heading-2"),
//   React.createElement("div", { id: "heading-3" }, "headin-3"),
// ]);

//?? 2. using js

// const header = (
//   <div className="title">
//     <h1>heading1</h1>
//     <h2>heading2</h2>
//     <h3>heading5</h3>
//   </div>
// );

//?? using funcitonal components

// function Header() {
//   return (
//     <div className="title">
//       <h1>heading1</h1>
//       <h2>heading2</h2>
//       <h3>heading5</h3>
//     </div>
//   );
// }

//?? attributes passing
// function Header() {
//   return (
//     <div className="sagar">
//       <img src="https://images.pexels.com/photos/12187289/pexels-photo-12187289.jpeg" />
//     </div>
//   );
// }

// const imageURL =
//   "https://images.pexels.com/photos/12187289/pexels-photo-12187289.jpeg";
// function Header() {
//   return (
//     <div className="con">
//       <img src={imageURL} className="image"></img>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header></Header>);
