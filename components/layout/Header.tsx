import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`p-4 flex justify-between items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h1 className="text-xl font-semibold">My App</h1>
      <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav
        className={`md:flex gap-4 ${
          isOpen ? "block" : "hidden"
        } absolute md:static ${
          darkMode ? "bg-gray-900" : "bg-gray-200"
        } top-16 right-4 p-4 rounded-md`}
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
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-md border"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
        <Image
          src="/avatar.png"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
