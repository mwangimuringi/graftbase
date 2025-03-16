import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">My App</h1>
      <button
        className="md:hidden block text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <nav
        className={`md:flex gap-4 ${
          isOpen ? "block" : "hidden"
        } absolute md:static bg-gray-800 top-16 right-4 p-4 rounded-md`}
      >
        <ul className="flex flex-col md:flex-row md:gap-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
