export interface AtGlanceData {
  title: string;
  value: string | number;
  iconSrc: string;
  trend?: {
    direction: "up" | "down";
    percent: string;
    label: string;
  };
}

export const atGlanceData: AtGlanceData[] = [
  {
    iconSrc: "/svg/ChatTeardrop.svg",
    title: "Consultations",
    value: 24,
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
  {
    title: "Orders Placed",
    value: 12,
    iconSrc: "/svg/Tag.svg",
    trend: { direction: "down", percent: "15%", label: "decrease" },
  },
  {
    title: "Conversion",
    value: "50%",
    iconSrc: "/svg/CheckFat.svg",
    trend: { direction: "down", percent: "15%", label: "decrease" },
  },
  {
    title: "Total Sales Value",
    value: "$2,400",
    iconSrc: "/svg/Coins.svg",
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
  {
    title: "Avg Order Value",
    value: "$240",
    iconSrc: "/svg/Coins.svg",
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
  {
    title: "Commission Paid",
    value: "$240",
    iconSrc: "/svg/PiggyBank.svg",
    trend: { direction: "up", percent: "15%", label: "increase" },
  },
];
