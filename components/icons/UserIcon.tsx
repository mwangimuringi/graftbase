// /components/icons/UserIcon.tsx
import React from "react";
import { motion } from "framer-motion";

interface UserIconProps {
  color?: string;
  size?: number;
}

const UserIcon: React.FC<UserIconProps> = ({ color = "gray", size = 24 }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="w-auto h-auto transition-colors duration-200 hover:text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      role="img"
      aria-label="User profile icon"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </g>
    </motion.svg>
  );
};

export default UserIcon;
