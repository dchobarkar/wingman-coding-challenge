import Image from "next/image";

import PageLayout from "../shared/PageLayout";
import StatsCard from "../shared/StatsCard";
import { atGlanceData } from "@/data/mock/AtGlance.data";

const AtGlance = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold font-geist-sans">At a glance</h2>
        <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm bg-white">
          <option>7 days</option>
          <option>30 days</option>
          <option>90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {atGlanceData.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            border
            trend={stat.trend}
            icon={
              <Image
                src={stat.iconSrc}
                alt={stat.title}
                width={20}
                height={20}
                className="opacity-60"
              />
            }
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default AtGlance;
