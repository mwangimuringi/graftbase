import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'

const Navbar = () => {
  const session = null;
  return (
    <nav className='flexBetween navbar'>
      <div className="flex-1 justify-start gap-10 ">
        <Link href="./">
          <Image
            src="/logo.svg"
            width={115}
            height={41}
            alt='Flexible'
          />
        </Link>
        <ul className='xl:flex hidden text-sm gap-7'>
          {NavLinks.map((link) => (
              <Link href={link.href} key={link.key} >{link.text}
              </Link>
          ))
          }
        </ul>
      </div>

      <div className="flexCenter gap-4">
          {session ? (
            <>
              UserPhoto
              <Link href = "/create-project">
              </Link>
            </>
          ) : (
            <AuthProviders />
          )}
      </div>

    </nav>
  )
}

export default Navbar
