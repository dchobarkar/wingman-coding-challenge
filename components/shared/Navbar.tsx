"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navbarData } from "@/data/mock/Navbar.data";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-white px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop tabs */}
        <div className="hidden md:flex space-x-8">
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
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              {navbarData.map((tab) => {
                const isActive = pathname === tab.href;

                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`flex items-center gap-2 px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "text-foreground font-semibold bg-[#CCFBEF]"
                        : "text-gray-500 hover:text-foreground hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src={tab.icon}
                      alt={tab.label}
                      width={16}
                      height={16}
                    />
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
