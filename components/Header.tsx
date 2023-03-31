/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
import logo from "../Assets/images/Logo.png"

const Header = () => {
  return (
    <nav className=' py-4 text-[#2E4049] px-20 flex justify-between'>
        <img src={logo.src} 
        alt="logo" />
        <div className='flex items-center gap-8 divide-x-2'>
            <p className='pl-3 cursor-pointer font-medium'>Home</p>
            <p className='pl-3 cursor-pointer font-medium'>About</p>
            <div className='flex pl-3 cursor-pointer font-medium items-center'>
                <p>Pages</p>
                <RiArrowDropDownLine />
            </div>
            <p className='pl-3 cursor-pointer font-medium'>Event</p>
            <p className='pl-3 cursor-pointer font-medium'>Contact</p>
            <button className='bg-[#FF6D6D] border-none text-white py-4 px-7 text-[18px] font-medium rounded-[34px]'>DONATE</button>
        </div>
    </nav>
  )
}

export default Header