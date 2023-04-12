/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
import logo from "../Assets/images/Logo.png"
import Link from "next/link"
const Header = () => {
  return (
    <header>
      <nav className='py-4 text-[#2E4049] px-20 flex justify-between items-center'>
        <figure>
          <img src={logo.src} alt="logo" />
        </figure>
        <ul className='hidden md:flex items-center gap-8 divide-x-2'>
          <li>
            <Link href={'/'} className='pl-3 cursor-pointer font-medium'>Home</Link>
          </li>
          <li>
            <Link href={'/about_us'} className='pl-3 cursor-pointer font-medium'>About</Link>
          </li>
          <li>
            <div className='flex pl-3 cursor-pointer font-medium items-center'>
              <p>Pages</p>
              <RiArrowDropDownLine />
            </div>
          </li>
          <li>
            <Link href={''} className='pl-3 cursor-pointer font-medium'>Event</Link>
          </li>
          <li>
            <Link href={''} className='pl-3 cursor-pointer font-medium'>Contact</Link>
          </li>
            
        </ul>
        <button className='bg-[#FF6D6D] hidden lg:block border-none text-white py-4 px-7 text-[18px] font-medium rounded-[34px]'>DONATE</button>
      </nav>
</header>

  )
}

export default Header