import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ChartCard = ({ title, children, className = "" }: ChartCardProps) => {
  return (
    <div className={`bg-white rounded-[20px] shadow p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="w-full h-64">{children}</div>
    </div>
  );
};

export default ChartCard;
