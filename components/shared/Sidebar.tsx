"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarData } from "@/data/mock/SideMobilebar.data";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen min-w-20 bg-bg-sidebar flex-col items-center py-6 space-y-8">
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

// Mobile Sidebar Drawer
export const MobileSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed left-0 top-0 h-full w-64 bg-bg-sidebar flex flex-col items-center py-6 space-y-8 shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {sidebarData.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex items-center justify-center"
              aria-label={item.label}
              onClick={onClose}
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
      </div>
    </div>
  );
};

export default Sidebar;
