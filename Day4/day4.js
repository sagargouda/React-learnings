import React from "react";
import ReactDOM from "react-dom/client";

// Components
// header, loggo, nav items
// body search , restraurant container , restro card
// footer , copyright , links , address , contact

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2149493636.jpg?w=740&t=st=1704760307~exp=1704760907~hmac=d2640b22656d9243b201bf8dc1a350f34cdca0edb4f4555d459cf42270fa1ec2"
        className="logo"
        width={100}
      />
    </div>

    {/* nav items */}
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
// destructured on the fly without using prop
// {
//   resName, cuisine, deliveryTime, rating;
// }
//  { resData } we can also put there in place of prop
const RestaurantCard = (props) => {
  const { resData } = props;

  //?? destructuring with optional chaining
  const { name, cuisine, rating, deliveryTime } = resData;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/umlojqiqvjvai9qlfnha"
        alt="res-logo"
      />
      <h1 className="res-heading">{name}</h1>
      <h4>{cuisine.join(",")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
const restaurantList = [
  {
    id: 1,
    name: "Spice Haven",
    cuisine: ["Indian", "Chinese"],
    rating: 4.2,
    deliveryTime: "30 minutes",
  },
  {
    id: 2,
    name: "Savor Delight",
    cuisine: ["Italian", "Pizza"],
    rating: 4.0,
    deliveryTime: "40 minutes",
  },
  {
    id: 3,
    name: "Tasty Bites",
    cuisine: ["Mexican", "Tacos"],
    rating: 4.8,
    deliveryTime: "25 minutes",
  },
  {
    id: 4,
    name: "Flavor Fusion",
    cuisine: ["Mediterranean", "Hummus"],
    rating: 4.5,
    deliveryTime: "35 minutes",
  },
  {
    id: 5,
    name: "Gourmet Grill",
    cuisine: ["Steakhouse", "BBQ"],
    rating: 4.3,
    deliveryTime: "45 minutes",
  },
  {
    id: 6,
    name: "Crispy Crunch",
    cuisine: ["Fast Food", "Burgers"],
    rating: 4.1,
    deliveryTime: "20 minutes",
  },
  {
    id: 7,
    name: "Sushi Delight",
    cuisine: ["Japanese", "Sushi"],
    rating: 4.7,
    deliveryTime: "50 minutes",
  },
  {
    id: 8,
    name: "Veggie Vibes",
    cuisine: ["Vegetarian", "Salads"],
    rating: 4.4,
    deliveryTime: "28 minutes",
  },
  {
    id: 9,
    name: "Pasta Paradise",
    cuisine: ["Italian", "Pasta"],
    rating: 4.6,
    deliveryTime: "38 minutes",
  },
  {
    id: 10,
    name: "Thai Temptations",
    cuisine: ["Thai", "Curry"],
    rating: 4.9,
    deliveryTime: "22 minutes",
  },
  {
    id: 11,
    name: "BBQ Bonanza",
    cuisine: ["BBQ", "Grill"],
    rating: 4.3,
    deliveryTime: "40 minutes",
  },
  {
    id: 12,
    name: "Mango Tango",
    cuisine: ["Fruit Bar", "Smoothies"],
    rating: 4.2,
    deliveryTime: "33 minutes",
  },
  {
    id: 13,
    name: "Wok Wonder",
    cuisine: ["Chinese", "Stir Fry"],
    rating: 4.5,
    deliveryTime: "30 minutes",
  },
  {
    id: 14,
    name: "Mediterranean Marvel",
    cuisine: ["Mediterranean", "Falafel"],
    rating: 4.7,
    deliveryTime: "35 minutes",
  },
  {
    id: 15,
    name: "Bakery Bliss",
    cuisine: ["Bakery", "Pastries"],
    rating: 4.0,
    deliveryTime: "25 minutes",
  },
];
const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {/* it will contain restro cards */}
      {restaurantList.map((list, index) => (
        // key = {list.id} or key = {index} but index is a bad practice
        <RestaurantCard key={list.id} resData={list} />
      ))}
      {/* <RestaurantCard
        resName="Medhana food"
        cuisine="chapathi,south indian , ice creams"
        rating="3.7 stars"
        deliveryTime="24 minute"
      /> */}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
