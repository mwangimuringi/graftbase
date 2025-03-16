import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
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
