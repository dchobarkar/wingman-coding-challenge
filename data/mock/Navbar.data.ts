import { NavTab } from "@/types/navbar.type";

export const navbarData: NavTab[] = [
  {
    id: "summary",
    label: "Summary",
    href: "/",
    icon: "/svg/ChartPieSlice.svg",
    isActive: true,
  },
  {
    id: "sales",
    label: "Sales",
    href: "/sales",
    icon: "/svg/Tag.svg",
  },
  {
    id: "chats",
    label: "Chats",
    href: "/chats",
    icon: "/svg/ChartTeardropText.svg",
  },
];
