"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


const Navbar = () => {
const pathname = usePathname()

  return (
    <div className=' text-white flex justify-between items-center bg-[#000] bg-opacity-[30%]  w-[100vw]'>
      <Link className='flex justify-between px-4 py-4 ' href="/">
        <Image src="/TechMinds.svg" 
        alt='TechMinds Logo'
        height={70}
        width={85}
        priority
     
     />
      </Link>
       <div className='hidden sm:flex sm:justify-between sm:gap-4 '>
        <Link className={pathname === "/"? 'text-[#FF7F0E]':"text-white"} href="/">HOME</Link>
        <Link className={pathname === "/about"? 'text-[#FF7F0E]':"text-white"} href="/about">ABOUT US</Link>
        <Link className={pathname === "/blog"? 'text-[#FF7F0E]':"text-white"} href="blog">BLOG</Link>
        <Link className={pathname === "/carrier"? 'text-[#FF7F0E]':"text-white"} href="carrier">CARRIER</Link>
        <Link className={pathname === "/contact"? 'text-[#FF7F0E]':"text-white"} href="contact">CONTACT US</Link>
      </div>
      <div className=''>
         <Image src="/rectangle.svg" 
        alt='TechMinds Logo'
        height={70}
        width={85}
        priority
        />
      </div>
    </div>
  )
}

export default Navbar
