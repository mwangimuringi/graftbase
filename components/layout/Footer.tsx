import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
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
    </footer>
  );
};

export default Footer;
