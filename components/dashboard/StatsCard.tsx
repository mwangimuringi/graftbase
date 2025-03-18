// /components/dashboard/StatsCard.tsx
import React from "react";
import { IconType } from "react-icons";

interface StatsCardProps {
  title: string;
  value: string | number;
  bgColor?: string;
  textColor?: string;
  Icon?: IconType;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  Icon,
}) => {
  return (
    <div
      className={`${bgColor} shadow-md rounded-lg p-4 flex items-center sm:flex-col sm:items-start transition transform hover:scale-105 hover:shadow-lg`}
      role="region"
      aria-labelledby={`stats-title-${title}`}
    >
      {Icon && (
        <Icon className="text-3xl sm:mb-2 sm:mr-0 mr-3" aria-hidden="true" />
      )}
      <div>
        <h3 id={`stats-title-${title}`} className="text-gray-600 text-sm">
          {title}
        </h3>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
