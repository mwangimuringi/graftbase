// components/buttons/IconButton.tsx

import React from 'react';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
