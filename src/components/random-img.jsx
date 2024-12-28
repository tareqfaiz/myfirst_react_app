import React from "react";

function RandomImage() {
  const img = "https://picsum.photos/200/200?grayscale";

  return (
    <img className="random-img" src={img + "?grayscale"} alt="random images" />
  );
}

export default RandomImage;
