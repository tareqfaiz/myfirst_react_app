import React from "react";

function Greeting() {
  const { greeting, color } = getGreeting(); // Get greeting and color

  function getGreeting() {
    const currentHour = new Date().getHours(); // Get current hour (0-23)
    let greeting = "";
    let color = "";

    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good Morning";
      color = "red"; // Morning = red
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = "Good Afternoon";
      color = "green"; // Afternoon = green
    } else if (currentHour >= 17 && currentHour < 21) {
      greeting = "Good Evening";
      color = "Black"; // Evening = black
    } else {
      greeting = "Good Night";
      color = "White"; // Night = white
    }

    return { greeting, color };
  }

  return { greeting, color }; // Return the greeting and color values to be used by Heading component
}

export default Greeting;
