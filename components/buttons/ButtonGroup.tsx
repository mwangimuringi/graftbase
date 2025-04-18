import React from 'react';

interface ButtonGroupProps {
  labels: string[];
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ labels }) => {
  return (
    <div className="flex gap-2">
      {labels.map((label, idx) => (
        <button key={idx}>{label}</button>
      ))}
    </div>
  );
};
