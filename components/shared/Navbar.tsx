"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navbarData } from "@/data/mock/Navbar.data";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex space-x-8 border-b border-border bg-white px-8 py-4">
      {navbarData.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`flex items-center gap-2 pb-2 transition-all duration-200 rounded-full px-4 py-1.5 ${
              isActive
                ? "text-foreground font-semibold border-b-2 border-primary bg-[#CCFBEF]"
                : "text-gray-500 hover:text-foreground hover:border-b-2 hover:border-gray-300"
            }`}
          >
            <Image src={tab.icon} alt={tab.label} width={16} height={16} />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
