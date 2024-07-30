import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link';

type ColumnProps = {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({title, links} : ColumnProps) => (
  <div className="footer_column">
    <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link) => <Link href= "/" key = {link}>{link}
      </Link>)}
    </ul>
  </div>
)
const Footer = () => {
  return (
    <Footer className='flex justify-start'>
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo.svg"
            width={115}
            height={41}
            alt='Flexible'
          />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>Flexibble is the worlds leading community for creatives to share, grow and get hired</p>
        </div>
        <div className="flex flex-wrap gap-12"
        <FooterColumn title ={footerLinks[0].title} links ={footerLinks[0].links}/> </div>
      </div>
    </Footer>
  )
}

export default Footer
