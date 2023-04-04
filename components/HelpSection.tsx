import React from 'react'
import Image from "next/image"
import bgImage from "../Assets/images/Image.png"
const HelpSection = () => {
  return (
    <section className='relative h-screen'>
        <div className='absolute z-10 top-0 backdrop-blur-lg bottom-0 left-0 right-0 bg-[#2E4049E8]'></div>
        <Image 
        src={bgImage}
        alt={''}
        fill
        className=' '
        />
        <div className='z-20'>
            <div className='z-20'>
                <p className='hero_text_sm z-20 text-white'>How We Help</p>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default HelpSection