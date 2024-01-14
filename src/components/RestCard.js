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

export default RestaurantCard;
