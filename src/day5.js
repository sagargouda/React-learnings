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
  // const { name, cuisine, rating, deliveryTime } = resData;

  return (
    <div className="res-card">
      <img className="res-img" src={resData.info.image.url} alt="res-logo" />
      <h1 className="res-heading">{resData.info.name}</h1>
      <h4>{resData.info.rating.rating_text}</h4>
      <h4>{resData.info.locality.name}</h4>
    </div>
  );
};
const restaurantList = [
  {
    type: "restaurant",
    info: {
      resId: 50550,
      name: "Kanti Sweets",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/50550/3028ae83d6b6a3450c0a93c83b20f949_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/50550/3028ae83d6b6a3450c0a93c83b20f949_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,445",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "108",
            reviewTextSmall: "108 Reviews",
            subtext: "108 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.5",
            reviewCount: "3,337",
            reviewTextSmall: "3,337 Reviews",
            subtext: "3,337 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹450 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Brigade Road, Bangalore",
        address: "157, St. Patricks Complex, Brigade Road, Bangalore",
        localityUrl: "bangalore/brigade-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/mithai/",
          name: "Mithai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "23 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/kanti-sweets-brigade-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/kanti-sweets-brigade-road/order",
      clickActionDeeplink: "",
    },
    distance: "1.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"50550","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20951957,
      name: "Kuttanad Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/20951957/083276c163d45672ed6af5e6fd2a76de_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/20951957/083276c163d45672ed6af5e6fd2a76de_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "NEW",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "75",
        subtext: "REVIEWS",
        is_new: true,
      },
      ratingNew: {
        newlyOpenedObj: {
          text: "Newly Opened",
          color: "#FFFFFF",
          bgColor: "#F4A266",
          bgColorV2: {
            type: "green",
            tint: "100",
          },
          subtitle: "OUTLET",
          ratingV2: "New",
        },
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: true,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "75",
            reviewTextSmall: "75 Reviews",
            subtext: "75 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Koramangala 5th Block, Bangalore",
        address:
          "143, Ground Floor, KHB Colony, Koramangala 5th Block, Bangalore",
        localityUrl: "bangalore/koramangala-5th-block-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/kerala/",
          name: "Kerala",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "48 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bangalore/kuttanad-restaurant-koramangala-5th-block-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bangalore/kuttanad-restaurant-koramangala-5th-block-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "4.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20951957","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "30% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 60503,
      name: "Krispy Kreme",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/54125/f24001ca7bd615e87761a4a71e92c102_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/54125/f24001ca7bd615e87761a4a71e92c102_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,212",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "61",
            reviewTextSmall: "61 Reviews",
            subtext: "61 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "1,151",
            reviewTextSmall: "1,151 Reviews",
            subtext: "1,151 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Richmond Road, Bangalore",
        address:
          "Krispy Kreme, Adarsh Opus, 1, Old -9, Campball Road, Near Austin Town, Richmond Road, Bangalore",
        localityUrl: "bangalore/richmond-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/krispy-kreme-richmond-road/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/krispy-kreme-richmond-road/order",
      clickActionDeeplink: "",
    },
    distance: "1.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"60503","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "30% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20006679,
      name: "Leon's Burgers & Wings",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/60551/60afc26a8d420799fc8bc7e27c968951_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/60551/60afc26a8d420799fc8bc7e27c968951_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "5,562",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "69",
            reviewTextSmall: "69 Reviews",
            subtext: "69 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "5,493",
            reviewTextSmall: "5,493 Reviews",
            subtext: "5,493 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Frazer Town, Bangalore",
        address:
          "90, Coles Road, Opposite Reliance Fresh, Pulkeshi Nagar, Frazer Town, Bangalore.",
        localityUrl: "bangalore/frazer-town-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/wraps/",
          name: "Wraps",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/leons-burgers-wings-frazer-town-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/leons-burgers-wings-frazer-town-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "3.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20006679","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20913858,
      name: "Chowman",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20913858/57565267c987fc9f2b351b631034df82_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20913858/57565267c987fc9f2b351b631034df82_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "278",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "68",
            reviewTextSmall: "68 Reviews",
            subtext: "68 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "210",
            reviewTextSmall: "210 Reviews",
            subtext: "210 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,400 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Hosur Road, Bangalore",
        address:
          "30, Laskar Hosur Road, Adugodi, Municipal Ward 63, Hosur Road, Bangalore",
        localityUrl: "bangalore/hosur-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/thai/",
          name: "Thai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/sichuan/",
          name: "Sichuan",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "45 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/chowman-hosur-road-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/chowman-hosur-road-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "3.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20913858","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹125 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20890111,
      name: "Haldiram's Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20890111/d4fbef9ea1011479349aa3a11e5e5245_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20890111/d4fbef9ea1011479349aa3a11e5e5245_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "169",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "37",
            reviewTextSmall: "37 Reviews",
            subtext: "37 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "132",
            reviewTextSmall: "132 Reviews",
            subtext: "132 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Majestic, Bangalore",
        address:
          "Unit 02, 2nd Floor, Global Mall, Mysore Deviation Road, Majestic, Bangalore",
        localityUrl: "bangalore/majestic-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/mithai/",
          name: "Mithai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "44 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/haldirams-restaurant-majestic-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/haldirams-restaurant-majestic-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "3.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20890111","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19934700,
      name: "RNR Biryani - Taste Of 1953",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/20246497/2b6f80091e6478fad73c73f5dca84270_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/20246497/2b6f80091e6478fad73c73f5dca84270_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "6,868",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "3,225",
            reviewTextSmall: "3,225 Reviews",
            subtext: "3,225 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "3,643",
            reviewTextSmall: "3,643 Reviews",
            subtext: "3,643 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹700 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Jayanagar, Bangalore",
        address:
          "429/31, 30th Cross, 4th Block, Near Jain Temple, Jayanagar, Bangalore",
        localityUrl: "bangalore/jayanagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "47 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bangalore/rnr-biryani-taste-of-1953-1-jayanagar-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bangalore/rnr-biryani-taste-of-1953-1-jayanagar-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "4.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19934700","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18497780,
      name: "SGS Non Veg - Gundu Pulav",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/18497780/7134b7aca44a48b46f8df79e2f41581c_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/18497780/7134b7aca44a48b46f8df79e2f41581c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "4,946",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.4",
            reviewCount: "241",
            reviewTextSmall: "241 Reviews",
            subtext: "241 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.5",
            reviewCount: "4,705",
            reviewTextSmall: "4,705 Reviews",
            subtext: "4,705 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "City Market, Bangalore",
        address:
          "21, Sowrastrapet, KV Temple Street, 2nd Cross, Near Chikpet Police Station, City Market, Bangalore",
        localityUrl: "bangalore/city-market-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 8 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bangalore/sgs-non-veg-gundu-pulav-city-market-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bangalore/sgs-non-veg-gundu-pulav-city-market-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18497780","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19712433,
      name: "Karim's Delhi 6 - Since 1913",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19712433/fd25f9b6d2dcd490f0c5391fb2e6aae9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19712433/fd25f9b6d2dcd490f0c5391fb2e6aae9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,336",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "69",
            reviewTextSmall: "69 Reviews",
            subtext: "69 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "1,267",
            reviewTextSmall: "1,267 Reviews",
            subtext: "1,267 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹950 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "St. Marks Road, Bangalore",
        address:
          "23 - 29, Ground Floor, Unit 1, 3, 4 & 5, White House, St. Marks Road, Bangalore",
        localityUrl: "bangalore/st-marks-road-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/rolls/",
          name: "Rolls",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "28 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bangalore/karims-delhi-6-since-1913-st-marks-road-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bangalore/karims-delhi-6-since-1913-st-marks-road-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "709 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19712433","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19588640,
      name: "The Pizza Bakery",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/18603822/b3308f7fbe6a3af401ee578c0c0dc9ab_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/18603822/b3308f7fbe6a3af401ee578c0c0dc9ab_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,098",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "279",
            reviewTextSmall: "279 Reviews",
            subtext: "279 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "1,819",
            reviewTextSmall: "1,819 Reviews",
            subtext: "1,819 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,500 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Church Street, Bangalore",
        address:
          "86, Coconut Grove, Spenser Building, Church Street, Bangalore",
        localityUrl: "bangalore/church-street-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "27 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/the-pizza-bakery-church-street-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/the-pizza-bakery-church-street-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19588640","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 61737,
      name: "Pai Vihar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/61737/b643543e2ec4675f3fb12fe188eb1b19_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/61737/b643543e2ec4675f3fb12fe188eb1b19_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,832",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.9",
            reviewCount: "56",
            reviewTextSmall: "56 Reviews",
            subtext: "56 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "1,776",
            reviewTextSmall: "1,776 Reviews",
            subtext: "1,776 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "City Market, Bangalore",
        address:
          "2, OTC Road, Near JC Road Bangalore, Chikkapete, B.B.M.P West, City Market, Bangalore",
        localityUrl: "bangalore/city-market-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "27 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/pai-vihar-city-market/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/pai-vihar-city-market/order",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"61737","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Flat 20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18820472,
      name: "Taco Bell",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/18820472/73a0331b3dd8388e0d510694f5d39474_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/18820472/73a0331b3dd8388e0d510694f5d39474_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,370",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "113",
            reviewTextSmall: "113 Reviews",
            subtext: "113 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "2,257",
            reviewTextSmall: "2,257 Reviews",
            subtext: "2,257 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹50 for one",
      },
      locality: {
        name: "Garuda Mall, Magrath Road, Bangalore",
        address:
          "15, 3rd Floor, Garuda Mall, Magrath Road, Craig Park Layout, Near Ashok Nagar, Brigade Road, Bangalore",
        localityUrl: "bangalore/restaurants/in/garuda-mall-magrath-road",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/mexican/",
          name: "Mexican",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bangalore/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹50 for one",
      },
    },
    order: {
      deliveryTime: "46 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/taco-bell-brigade-road-bangalore/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bangalore/taco-bell-brigade-road-bangalore/order",
      clickActionDeeplink: "",
    },
    distance: "1.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7d8eb252-4a6b-4323-8ed9-c7db4c1089cb","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18820472","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
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
