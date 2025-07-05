import Image from "next/image";

interface ForecastCardProps {
  title: string;
  value: string;
  description: string;
  trend: "up" | "down";
  percentage: string;
}

const ForecastCard = ({
  title,
  value,
  description,
  trend,
  percentage,
}: ForecastCardProps) => {
  return (
    <div className="bg-white rounded-[20px] shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center gap-1">
          <Image
            src={trend === "up" ? "/svg/TrendUp.svg" : "/svg/TrendDown.svg"}
            alt={trend === "up" ? "Trend Up" : "Trend Down"}
            width={16}
            height={16}
          />
          <span
            className={`text-sm font-medium ${
              trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {percentage}
          </span>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ForecastCard;
