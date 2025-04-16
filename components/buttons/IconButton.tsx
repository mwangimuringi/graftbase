import React from 'react';
import { Loader2 } from 'lucide-react';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className = '',
  ariaLabel,
  disabled = false,
  type = 'button',
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`p-2 rounded-full transition-colors hover:bg-gray-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
      ) : (
        icon
      )}
    </button>
  );
};

export default IconButton;
