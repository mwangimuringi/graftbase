import React, { useState } from 'react';

export const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => setIsOn(prev => !prev);

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: isOn ? '#4ade80' : '#f87171',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      {isOn ? 'On' : 'Off'}
    </button>
  );
};
