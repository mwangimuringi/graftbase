// app/dashboard/layout.tsx
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-7xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
}
