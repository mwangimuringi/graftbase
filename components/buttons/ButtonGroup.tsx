import React from 'react';

interface ButtonGroupProps {
  labels: string[];
  onClick?: (label: string, index: number) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ labels, onClick }) => {
  return (
    <div className="flex gap-2">
      {labels.map((label, idx) => (
        <button key={idx} onClick={() => onClick?.(label, idx)}>
          {label}
        </button>
      ))}
    </div>
  );
};
