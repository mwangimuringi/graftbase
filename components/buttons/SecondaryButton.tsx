export {};

import React from 'react';
import { Loader2 } from 'lucide-react';

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  size = 'md',
})

{
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
        rounded-md text-blue-600 transition flex items-center justify-center
        ${sizeStyles[size]}
        ${disabled ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-100 hover:bg-blue-200'}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      // style={{ backgroundColor: disabled ? '#ccc' : '#fff' }}