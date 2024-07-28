import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from '@/constants'
import { link } from 'fs'

const Navbar = () => {
  return (
    <nav className='flex justify-between navbar'>
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
          {/* {
            NavLinks.map((link) = {
              <Link> {link.text}
              </Link>
            })
          } */}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
