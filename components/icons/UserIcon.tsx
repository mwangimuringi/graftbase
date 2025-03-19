// /components/icons/UserIcon.tsx
import React from "react";

interface UserIconProps {
  color?: string;
  size?: number;
}

const UserIcon: React.FC<UserIconProps> = ({ color = "gray", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="w-auto h-auto"
      fill="none"
      stroke={color}
      strokeWidth="2"
      role="img"
      aria-label="User profile icon"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </g>
    </svg>
  );
};

export default UserIcon;
