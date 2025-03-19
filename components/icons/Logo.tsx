// /components/icons/Logo.tsx
import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  color?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ color = "black", size = 48 }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-auto h-auto"
      width={size}
      height={size}
      fill={color}
      role="img"
      aria-label="Company logo"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        strokeWidth="5"
        fill="none"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.rect
        x="40"
        y="40"
        width="20"
        height="20"
        fill={color}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
    </motion.svg>
  );
};

export default Logo;
