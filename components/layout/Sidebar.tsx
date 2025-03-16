import React, { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <aside
      className={`h-screen p-4 transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      } ${isOpen ? "w-64" : "w-16"}`}
      aria-label="Sidebar"
    >
      <div className="flex justify-between items-center mb-4">
        <button
          aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          className="p-2 rounded bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "←" : "→"}
        </button>
        {isOpen && (
          <button
            aria-label="Toggle Dark Mode"
            className="p-2 rounded bg-gray-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        )}
      </div>
      {isOpen && (
        <nav>
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
      )}
    </aside>
  );
};

export default Sidebar;
