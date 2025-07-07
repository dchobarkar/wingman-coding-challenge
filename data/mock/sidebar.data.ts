import { SidebarItem } from "@/types/sidebar.type";

export const sidebarData: SidebarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "/svg/House.svg",
    href: "/",
    isActive: true,
  },
  {
    id: "chats",
    label: "Chats",
    icon: "/svg/ChatTeardrop.svg",
    href: "/chat",
  },
  {
    id: "users",
    label: "Users",
    icon: "/svg/UsersFour.svg",
    href: "/user",
  },
];
