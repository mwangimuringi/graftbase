// /components/ui/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "outlined" | "shadow";
}

const variantClasses = {
  default: "bg-white shadow-md",
  outlined: "bg-white border border-gray-300",
  shadow: "bg-white shadow-lg",
};

const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  variant = "default",
}) => {
  return (
    <div className={`rounded-lg p-4 ${variantClasses[variant]}`}>
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
