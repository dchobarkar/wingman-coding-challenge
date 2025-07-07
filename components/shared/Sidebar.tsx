"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarData } from "@/data/mock/Sidebar.data";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-20 bg-bg-sidebar flex flex-col items-center py-6 space-y-8">
      {sidebarData.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            className="relative flex items-center justify-center"
            aria-label={item.label}
          >
            <span
              className={
                isActive
                  ? "bg-white rounded-[10px] p-2 shadow flex items-center justify-center"
                  : "flex items-center justify-center"
              }
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className={
                  isActive ? "w-6 h-6 text-foreground" : "w-6 h-6 opacity-70"
                }
                style={{
                  filter: isActive ? "none" : "grayscale(1) brightness(0.7)",
                }}
              />
            </span>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
