"use client";

import { useState } from "react";

import Sidebar, { MobileSidebar } from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-4 md:p-8 m-4 md:m-12 rounded-[20px] shadow bg-background">
          {children}
        </div>
      </main>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />
    </div>
  );
};

export default LayoutWrapper;
