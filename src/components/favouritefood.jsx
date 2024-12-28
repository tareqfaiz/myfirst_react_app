import React from "react";

function Fabfood() {
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px 5px 0px 5px" }}>
        My Favorite Foods
      </h2>
      <img
        className="food-img"
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
        alt="Pancake with Sliced Strawberry"
      />
      <img
        className="food-img"
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
        alt="burger with french fries"
      />
      <img
        className="food-img"
        src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
        alt="pasta dish tomato and basil"
      />
    </div>
  );
}

export default Fabfood;
