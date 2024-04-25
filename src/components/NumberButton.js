import React from 'react';
import { useState } from 'react';
import Keypad1 from '../images/KeyPad/Keypad1.bmp';

function NumberButton({ label, action, buttonImage }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => {
    setIsPressed(false);
    action();
  };
  const handleMouseLeave = () => setIsPressed(false); // In case mouse leaves the button while pressed
  
  const imageSrc = `../images/KeyPad/${buttonImage}.bmp`

  return (
    <div
      className="iris-keypad-button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: isPressed ? 'center bottom' : 'center top',
      }}
    >
      
    </div>
  );
}

export default NumberButton;