import RestaurantCard from "./RestCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantLists, setrestaurantList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //?? filtering out logic here
            const filteredList = restaurantLists.filter((res) => {
              return res.info.rating.rating_text > 4.4;
            });
            setrestaurantList(filteredList);
            console.log(filteredList);
          }}
          // onMouseEnter={() => {
          //   console.log("hey sgaar");
          // }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* it will contain restro cards */}
        {restaurantLists.map((list, index) => (
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
};
export default Body;
