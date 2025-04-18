import React from 'react';

interface ButtonGroupProps {
  labels: string[];
  onClick?: (label: string, index: number) => void;
  selectedIndex?: number;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  labels,
  onClick,
  selectedIndex,
}) => {
  return (
    <div className="flex gap-2">
      {labels.map((label, idx) => (
        <button
          key={idx}
          onClick={() => onClick?.(label, idx)}
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
