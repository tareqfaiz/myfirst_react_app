import React from "react";

function RandomNum() {
  const customStyle = {
    color: "green",
    background: "yellow",
    fontSize: "20px",
    fontWeight: "bolder",
    textAlign: "center",
    border: "2px dashed green",
    display: "inline-block",
    padding: "5px",
  };

  return (
    <p style={customStyle}>
      Your random point is {Math.floor(Math.random() * 10)}.
    </p>
  );
}

export default RandomNum;
