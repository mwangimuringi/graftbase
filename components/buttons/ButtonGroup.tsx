import React from 'react';

interface ButtonGroupProps {
  labels: string[];
  onClick?: (label: string, index: number) => void;
  selectedIndex?: number;
  fullWidth?: boolean;
  gap?: number;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  labels,
  onClick,
  selectedIndex,
  fullWidth = false,
  gap = 2,
}) => {
  return (
    <div className={`flex gap-${gap} ${fullWidth ? 'w-full' : ''}`}>
      {labels.map((label, idx) => (
        <button
          key={idx}
          onClick={() => onClick?.(label, idx)}
          aria-pressed={selectedIndex === idx}
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
