'use client';

import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <span>
      {children}
      <span>{text}</span>
    </span>
  );
};

export default Tooltip;
