// /components/ui/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {children}
    </div>
  );
};

export default Card;
