import { SidebarItem } from "@/types/sidebar.type";

export const sidebarData: SidebarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "/svg/house.svg",
    href: "/",
    isActive: true,
  },
  {
    id: "chat",
    label: "Chat",
    icon: "/svg/ChatTeardrop.svg",
    href: "/chat",
  },
  {
    id: "users",
    label: "Users",
    icon: "/svg/UsersFour.svg",
    href: "/users",
  },
];
