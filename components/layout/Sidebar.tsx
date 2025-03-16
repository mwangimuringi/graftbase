import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold">Sidebar</h2>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block hover:bg-gray-700 p-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="block hover:bg-gray-700 p-2 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block hover:bg-gray-700 p-2 rounded"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
