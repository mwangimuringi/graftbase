// app/dashboard/layout.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "/dashboard", label: "Home" },
  { href: "/dashboard/conversations", label: "Conversations" },
  { href: "/dashboard/files", label: "Files" },
  { href: "/dashboard/team", label: "Team" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-900">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: showSidebar || typeof window !== "undefined" && window.innerWidth >= 768 ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 200 }}
        className={`w-64 bg-white shadow-md p-4 absolute md:static z-20 ${
          showSidebar ? "block" : "hidden md:block"
        }`}
      >
        <nav className="flex flex-col space-y-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setShowSidebar(false)}
              className={`px-2 py-1 rounded ${
                pathname.startsWith(href)
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </motion.aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <button
            className="md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="text-sm text-gray-600 hidden md:block">User Name</div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
