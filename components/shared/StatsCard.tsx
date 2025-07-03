import { ReactNode } from "react";
import Image from "next/image";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  colorClass?: string;
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
  colorClass = "bg-primary",
  trend,
}: StatsCardProps) => {
  return (
    <div className="flex items-center gap-4 p-6 rounded-[20px] shadow-lg bg-card min-w-[300px]">
      {icon && (
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full ${colorClass}`}
        >
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-sm text-muted font-semibold uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-1 text-sm">
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
            <span className="text-muted">{trend.label}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
