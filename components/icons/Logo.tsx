// /components/icons/Logo.tsx
import React from "react";

const Logo: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-12 h-12 text-black"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="24"
        fill="currentColor"
      >
        GB
      </text>
    </svg>
  );
};

export default Logo;
