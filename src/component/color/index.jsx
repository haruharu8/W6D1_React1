import React, { useState } from 'react'

const ColorChanger = () => {

const [backgroundColor, setBackgroundColor] = useState["red"];
const changeColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ backgroundColor: backgroundColor, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default ColorChanger;