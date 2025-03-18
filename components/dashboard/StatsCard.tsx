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
    <div className={`${bgColor} shadow-md rounded-lg p-4 flex items-center`}>
      {Icon && <Icon className="text-3xl mr-3" />}
      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
