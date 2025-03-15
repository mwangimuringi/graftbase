// /components/ui/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "outlined" | "shadow";
  size?: "small" | "medium" | "large";
  hoverEffect?: boolean;
}

const variantClasses = {
  default: "bg-white shadow-md",
  outlined: "bg-white border border-gray-300",
  shadow: "bg-white shadow-lg",
};

const sizeClasses = {
  small: "p-2 text-sm",
  medium: "p-4 text-base",
  large: "p-6 text-lg",
};

const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  variant = "default",
  size = "medium",
  hoverEffect = false,
}) => {
  return (
    <div
      className={`rounded-lg ${variantClasses[variant]} ${sizeClasses[size]} ${
        hoverEffect ? "transition-transform transform hover:scale-105" : ""
      }`}
    >
      {header && (
        <div className="border-b pb-2 mb-3 font-semibold">{header}</div>
      )}
      <div>{children}</div>
      {footer && (
        <div className="border-t pt-2 mt-3 text-sm text-gray-600">{footer}</div>
      )}
    </div>
  );
};

export default Card;
