// /components/icons/Logo.tsx
import React from "react";

interface LogoProps {
  color?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ color = "black", size = 48 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-auto h-auto"
      width={size}
      height={size}
      fill={color}
      role="img"
      aria-label="Company logo"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        strokeWidth="5"
        fill="none"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="24"
        fill={color}
        aria-hidden="true"
      >
        GB
      </text>
    </svg>
  );
};

export default Logo;
