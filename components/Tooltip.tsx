'use client';

import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const positionStyles: Record<string, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
};

const Tooltip = ({ text, children, position = 'top' }: TooltipProps) => {
  return (
    <span className="relative group inline-block">
      {children}
      <div
        className={`absolute hidden group-hover:block z-10 ${positionStyles[position]}`}
      >
        <div className="bg-black text-white text-xs px-2 py-1 rounded">
          {text}
        </div>
      </div>
    </span>
  );
};

export default Tooltip;
