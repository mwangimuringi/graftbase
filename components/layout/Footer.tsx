import React, { useState } from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <footer
      className={`p-4 flex flex-col md:flex-row justify-between items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <p className="text-center md:text-left">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </p>
      <div className="mt-2 md:mt-0 flex gap-4">
        <Link href="https://twitter.com" className="hover:underline">
          Twitter
        </Link>
        <Link href="https://facebook.com" className="hover:underline">
          Facebook
        </Link>
        <Link href="https://linkedin.com" className="hover:underline">
          LinkedIn
        </Link>
      </div>
      <button
        className="mt-2 md:mt-0 p-2 rounded-md border"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    </footer>
  );
};

export default Footer;
