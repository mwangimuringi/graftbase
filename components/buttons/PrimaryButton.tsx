import React from 'react';
import { Loader2 } from 'lucide-react';

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  size = 'md',
}) => {
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={`
        rounded-md text-white transition flex items-center justify-center
        ${sizeStyles[size]}
        ${disabled ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : children}
    </button>
  );
};

export default PrimaryButton;
