import React from 'react'
import Image from 'next/image'
import smile1 from "../Assets/images/Photo (5).png";
import smile2 from "../Assets/images/Photo (6).png";
import smile3 from "../Assets/images/Photo (7).png";
import smile4 from "../Assets/images/cause5.png";


const WhatWeDid = () => {
    
  return (
    <div className='grid lg:grid-cols-2'>
            <div className='py-10 space-y-4 px-14 bg-[#2E4049]'>
                <div className=''>
                    <p className="hero_text_sm text-white">What we do</p>
                    <p className='hero_text_big  text-white text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>We do it for Poeple in Need</p>
                </div>
                <p className='text-white'>Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled  a type specimen book. </p>
                <button className='bg-[#FF6D6D] text-white big_btn'>MORE PROJECT</button>
            </div>
            <div className='flex'>
                <Image 
                    src={smile1}
                    alt={''}
                    width={0}
                    height={0}
                    className='object-cover w-[50%]'
                />
                <Image 
                    src={smile2}
                    alt={''}
                    width={0}
                    height={0}
                    className='object-cover w-[50%]'
                />
            </div>
            <div className='flex'>
                <Image 
                    src={smile3}
                    alt={''}
                    width={0}
                    height={0}
                    className='object-cover w-[50%]'
                />
                <Image 
                    src={smile4}
                    alt={''}
                    width={0}
                    height={0}
                    className='object-cover w-[50%]'
                />
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='bg-[#FF6D6D] flex flex-col md:w-[50%] justify-end px-9 py-9'>
                    <div className='flex gap-2 '>
                        <p className='py-2 px-3 rounded-full bg-[#120d0d25] text-white'>Education</p>
                        <p className='py-2 px-3 rounded-full bg-[#120d0d25] text-white'>Health</p>
                    </div>
                    <p className='hero_text_big  text-white text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>More than One Life Changed</p>
              </div>
              <Image 
                    src={smile4}
                    alt={''}
                    width={0}
                    height={0}
                    className='object-cover w-full md:w-[50%]'
                />
            </div>
    </div>
  )
}

export default WhatWeDid