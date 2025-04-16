// components/buttons/IconButton.tsx

import React from "react";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full hover:bg-gray-200 transition ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
