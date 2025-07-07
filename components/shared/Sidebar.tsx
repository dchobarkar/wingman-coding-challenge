"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { sidebarData } from "@/data/mock/sidebar.data";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleNavClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <aside className="h-screen w-20 bg-success/80 flex flex-col items-center py-6 space-y-8">
      {sidebarData.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={() => handleNavClick(item.id)}
          className={`relative p-2 rounded-lg transition-all duration-200 ${
            activeItem === item.id
              ? "bg-white/20 text-white"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
          aria-label={item.label}
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={24}
            height={24}
            className="w-6 h-6"
          />
          {activeItem === item.id && (
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full" />
          )}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
