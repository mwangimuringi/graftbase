import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">My App</h1>
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden p-2 bg-gray-700 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
          <button
            className="p-2 bg-gray-700 rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
      <div
        className={`mt-4 space-y-2 ${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-4 md:mt-0`}
      >
        <Link href="/" className="block md:inline hover:underline">
          Home
        </Link>
        <Link href="/about" className="block md:inline hover:underline">
          About
        </Link>
        <Link href="/contact" className="block md:inline hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
