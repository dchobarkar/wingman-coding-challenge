"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Image from "next/image";

import PageLayout from "../shared/PageLayout";
import {
  consultationsChartData,
  vsPastPeriodData,
  forecastCards,
} from "@/data/mock/Insights.data";

const Insights = () => {
  return (
    <PageLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-geist-sans">Insights</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Consultations Chart */}
        <div className="bg-white rounded-[20px] shadow p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Consultations
          </h3>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={consultationsChartData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" domain={[0, 60]} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 20]} />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="right"
                  dataKey="experts"
                  name="Experts online"
                  fill="#FFE29A"
                  barSize={16}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="incoming"
                  name="Incoming"
                  stroke="#3CB4F1"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="answered"
                  name="Answered"
                  stroke="#A3A3A3"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vs Past Period Chart */}
        <div className="bg-white rounded-[20px] shadow p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Vs Past Period
          </h3>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={vsPastPeriodData}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="consultations"
                  name="Consultations"
                  fill="#3CB4F1"
                  barSize={24}
                />
                <Bar
                  dataKey="ordersClosed"
                  name="Orders closed"
                  fill="#0A726F"
                  barSize={24}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Forecasts Card */}
        <div className="rounded-[20px] shadow p-6 flex flex-col justify-center min-h-[300px] bg-gradient-to-br from-[#3CB4F1] to-[#0A726F]">
          {forecastCards.map((card, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-white">
                  {card.percent}
                </span>
                <Image
                  src="/svg/TrendUp.svg"
                  alt="Trend Up"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-white text-sm leading-tight">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Insights;
