import React from "react";
import Greeting from "./greeting";

function Heading() {
  const { greeting, color } = Greeting(); // Call Greeting to get greeting and color

  const fName = "Tareq";
  const lName = "Faiz";

  return (
    <h1 className="heading" style={{ color: color, textAlign: "center" }}>
      {`${greeting} ${fName} ${lName}!`}
    </h1>
  );
}

export default Heading;
