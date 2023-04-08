/* eslint-disable @next/next/no-img-element */
import logo from "../Assets/images/footerLogo.png"
import {AiOutlineInstagram} from "react-icons/ai"
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className=' bg-[#2E4049] '>
        <div className='flex flex-col items-center justify-center mx-auto lg:mx-[200px] py-14'>
            <div className=' grid xl:grid-cols-2 gap-6'>
                <div className='space-y-4 mx-6 lg:mx-0'>
                    <img src={logo.src} 
                    alt="logo" className="w-[100px] h-[26px]"/>
                    <p className='text-white'>Care about people to transforming their lives and exudes a positives Impressiono believe. fundraising NGO organizations.</p>
                    <div className='flex text-white gap-5'>
                        <AiOutlineInstagram />
                        <BsFacebook />
                        <BsTwitter />
                        <BsPinterest />
                    </div>
                </div>
                <div className='grid xl:grid-cols-3 gap-7 bg-[#384C56]  p-7 text-white'>
                    <div className='space-y-5'>
                        <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[15px] font-extrabold text-white'>Get Involved</p>
                        <ul className='space-y-4'>
                            <li>About Us</li>
                            <li>Volunteer</li>
                            <li>Causes</li>
                            <li>Projects</li>
                            <li>Team</li>
                        </ul>
                    </div>

                    <div className='space-y-5'>
                        <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[15px]  font-extrabold text-white'>Utility</p>
                        <ul className='space-y-4'>
                            <li>About Us</li>
                            <li>Volunteer</li>
                            <li>Causes</li>
                            <li>Projects</li>
                            <li>Team</li>
                        </ul>
                    </div>

                    <div className='space-y-5'>
                        <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[15px]  font-extrabold text-white'>Contact</p>
                        <ul className='space-y-4'>
                            <li>About Us</li>
                            <li>Volunteer</li>
                            <li>Causes</li>
                            <li>Projects</li>
                            <li>Team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer