import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ colorChange, color }) {
  const handleClick = () => {
    const newColor = getRandomColor()
    colorChange(newColor)
  }
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
