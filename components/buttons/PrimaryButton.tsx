// PrimaryButton.tsx
import React from 'react';

type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
};

const PrimaryButton: React.FC<Props> = ({
  label,
  onClick = () => {},
  disabled = false,]
  fullWidth = false,
  className = '',
}) => {
  return (
    <button
      className={`px-4 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-300 ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'
      } ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
