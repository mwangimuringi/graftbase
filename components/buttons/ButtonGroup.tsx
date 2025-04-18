import React, { useState } from 'react';

interface ButtonGroupProps {
  labels: string[];
  onClick?: (label: string, index: number) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ labels, onClick }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (label: string, index: number) => {
    setSelectedIndex(index);
    onClick?.(label, index);
  };

  return (
    <div className="flex gap-2">
      {labels.map((label, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(label, idx)}
          className={`px-3 py-1 rounded border ${
            selectedIndex === idx ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
