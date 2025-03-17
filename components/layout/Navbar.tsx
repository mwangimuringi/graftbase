import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">My App</h1>
        <button
          className="md:hidden p-2 bg-gray-700 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
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
