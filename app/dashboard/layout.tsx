// app/dashboard/layout.tsx
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Home" },
  { href: "/dashboard/conversations", label: "Conversations" },
  { href: "/dashboard/files", label: "Files" },
  { href: "/dashboard/team", label: "Team" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      <aside className="w-64 bg-white shadow-md p-4">
        <nav className="flex flex-col space-y-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-2 py-1 rounded ${
                pathname.startsWith(href) ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
