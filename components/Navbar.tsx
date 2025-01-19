import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';

const Navbar = () => {
  const session = {
    user: {
      name: 'John Doe',
      photo: '/user-photo.jpg',
    },
  };

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 justify-start gap-10">
        <Link href="./">
          <Image src="/logo.svg" width={115} height={41} alt="Flexible" />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            <Image
              src={session.user.photo}
              alt={session.user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <Link
              href="/create-project"
              className="text-sm px-4 py-2 rounded-lg bg-primary text-white"
            >
              Create Project
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
