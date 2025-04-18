import React, { useState } from 'react';

export const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(prev => !prev)}
      className={`px-4 py-2 rounded text-white ${
        isOn ? 'bg-green-400' : 'bg-red-400'
      }`}
    >
      {isOn ? 'On' : 'Off'}
    </button>
  );
};
