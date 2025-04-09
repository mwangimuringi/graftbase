// app/dashboard/layout.tsx
import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      <aside className="w-64 bg-white shadow-md p-4">
        <nav className="flex flex-col space-y-2">
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/conversations">Conversations</Link>
          <Link href="/dashboard/files">Files</Link>
          <Link href="/dashboard/team">Team</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
