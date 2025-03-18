// /components/dashboard/StatsCard.tsx
import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  bgColor?: string;
  textColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}) => {
  return (
    <div className={`${bgColor} shadow-md rounded-lg p-4`}>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
};

export default StatsCard;
