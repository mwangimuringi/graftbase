import React, { useState } from 'react';

interface ToggleButtonProps {
  onLabel?: string;
  offLabel?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  onLabel = 'On',
  offLabel = 'Off',
}) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(prev => !prev)}
      className={`px-4 py-2 rounded text-white ${
        isOn ? 'bg-green-400' : 'bg-red-400'
      }`}
    >
      {isOn ? onLabel : offLabel}
    </button>
  );
};
