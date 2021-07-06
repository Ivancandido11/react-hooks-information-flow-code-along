import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  const handleChildClick = (newChildColor) => {
    const newRandomColor = randomColor
    setColor(newRandomColor)
    setChildColor(newChildColor)
  }
  
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child
        colorChange={handleChildClick}
        color={childColor}
      />
      <Child
        colorChange={handleChildClick}
        color={childColor}
      />
    </div>
  );
}

export default Parent;
