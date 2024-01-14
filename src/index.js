import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestCard";

// Components
// header, loggo, nav items
// body search , restraurant container , restro card
// footer , copyright , links , address , contact
//?? HEADER COMPONENT

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
