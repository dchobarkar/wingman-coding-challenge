export interface AtGlanceStat {
  iconSrc: string;
  title: string;
  value: string | number;
  trend?: {
    direction: "up" | "down";
    percent: string;
    label: string;
  };
}

export const atGlanceData: AtGlanceStat[] = [
  {
    iconSrc: "/svg/ChatTeardrop.svg",
    title: "Consultations",
    value: 24,
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
  {
    iconSrc: "/svg/Tag.svg",
    title: "Orders Placed",
    value: 12,
    trend: { direction: "down", percent: "15%", label: "decrease" },
  },
  {
    iconSrc: "/svg/CheckFat.svg",
    title: "Conversion",
    value: "50%",
    trend: { direction: "down", percent: "15%", label: "decrease" },
  },
  {
    iconSrc: "/svg/Coins.svg",
    title: "Total Sales Value",
    value: "$2,400",
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
  {
    iconSrc: "/svg/Coins.svg",
    title: "Avg Order Value",
    value: "$240",
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
  {
    iconSrc: "/svg/PiggyBank.svg",
    title: "Commission Paid",
    value: "$240",
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
];
