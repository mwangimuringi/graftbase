import React, { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`h-screen bg-gray-800 text-white p-4 transition-all ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button
        className="mb-4 p-2 bg-gray-700 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "←" : "→"}
      </button>
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
