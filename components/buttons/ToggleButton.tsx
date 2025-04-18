import React, { useState } from 'react';

export const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => setIsOn(prev => !prev);

  return (
    <button onClick={handleClick}>
      {isOn ? 'On' : 'Off'}
    </button>
  );
};
