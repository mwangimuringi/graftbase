// components/buttons/PrimaryButton.tsx

import React from 'react';

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
