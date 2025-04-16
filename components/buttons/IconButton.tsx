// components/buttons/IconButton.tsx

import React from "react";
import { Loader2 } from 'lucide-react';

type IconButtonProps = {
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
  };

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
    type={type || 'button'}
      onClick={onClick}
      className={`p-2 rounded-full hover:bg-gray-200 transition ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
