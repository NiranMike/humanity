import React from 'react'
import Image from "next/image"
import bgImage from "../Assets/images/Image.png"
import help from "../Assets/images/help.png"

const HelpSection = () => {
  
  return (
    <section className='lg:px-[210px] md:px-[180px] px-4 h-screen relative '>
        <div className='absolute z-10 top-0 backdrop-blur-lg bottom-0 left-0 right-0 bg-[#2E4049E8]'></div>
        <Image 
        src={bgImage}
        alt={'blur bg'}
        fill
        className=' '
        />
        <div className='grid xl:grid-cols-2 gap-9 items-center h-screen z-10 my-auto justify-center'>
            <div className='z-20 space-y-4'>
                <p className='hero_text_sm z-20 text-white'>How We Help</p>
                <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-white'>Join The CommunityTo Give Education For Children</p>
                <p className='text-white text-[15px] 2xl:text-[35px]'>Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <Image 
                src={help}
                alt='helpImg'
                width={0}
                height={0}
                className='object-contain'
                />
                <button className='bg-[#FF6D6D] text-white big_btn' >DONATE NOW</button>
            </div>
            <div className='border hidden xl:block py-7 z-20 border-white px-10'>
              <p className='hero_text_big pb-5 text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-white'>Become A Volunteer</p>
              <form className='grid gap-5'>
                  <input className='border w-full bg-transparent border-white p-3' type='text' placeholder="Full Name*"/>
                  <input className='border w-full bg-transparent border-white p-3' type='email' placeholder="Email Address*"/>
                  <input className='border w-full bg-transparent border-white p-3' type='phone' placeholder="Phone Number*"/>
                  <textarea placeholder='Message*' className='bg-transparent p-3 h-[150px] border' />
                  <button className='text-black bg-white big_btn'>Submit</button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default HelpSection