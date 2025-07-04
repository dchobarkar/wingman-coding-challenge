import Image from "next/image";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  border?: boolean;
  trend?: {
    direction: "up" | "down";
    percent: string;
    label: string;
  };
}

const StatsCard = ({
  title,
  value,
  icon,
  border = false,
  trend,
}: StatsCardProps) => {
  return (
    <div
      className={`flex flex-col gap-2 p-6 rounded-[20px] shadow bg-white min-w-[220px] ${
        border ? "border border-gray-200" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="uppercase text-xs font-semibold text-gray-400 tracking-wide">
          {title}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      {trend && (
        <div className="flex items-center gap-1 mt-1 text-xs">
          <Image
            src={
              trend.direction === "up"
                ? "/svg/TrendUp.svg"
                : "/svg/TrendDown.svg"
            }
            alt={trend.direction === "up" ? "Trend Up" : "Trend Down"}
            width={16}
            height={16}
          />
          <span
            className={
              trend.direction === "up" ? "text-green-500" : "text-red-500"
            }
          >
            {trend.percent}
          </span>
          <span className="text-gray-400">{trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
