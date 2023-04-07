import React from 'react'
import Image from "next/image"
import man1 from "../Assets/images/m3.png";

const TestimonialSection = () => {
  return (
    <section className='sectionContainer'>
        <div className="space-y-9">
            <div className='text-center'>
                <p className="hero_text_sm text-[#FF6D6D]">Testimonial</p>
                <p className='sectionHeader'>What People Say About Us</p>
            </div>
            <div className='flex flex-col  xl:flex-row sm:mx-4 gap-5'>
                <div className='flex p-3 flex-col sm:p-3 sm:flex-row bg-[#ECF1F0] justify-center items-center gap-3'>
                    <Image 
                      src={man1}
                      alt={""}
                      width={0}
                      height={0}
                      className='sm:w-full w-full  object-cover'
                    />
                    <div>
                        <div className='flex justify-between'>
                            <div className='px-3'>
                                <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Belli Smith</p>
                                <p className=' font-normal text-[#727272] mb-4'>Designer</p>
                            </div>
                            <Image 
                            src={""}
                            alt={""}
                            width={0}
                            height={0}
                            />
                        </div>
                        <p className=' font-normal p-3 text-[#727272]'>Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.</p>

                    </div>
                </div>
                <div className='flex p-3 flex-col sm:p-3 sm:flex-row mx-auto bg-[#ECF1F0] justify-center items-center gap-3'>
                    <Image 
                      src={man1}
                      alt={""}
                      width={0}
                      height={0}
                      className='sm:w-full w-full  object-cover'
                    />
                    <div>
                        <div className='flex justify-between'>
                            <div className='px-3'>
                                <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Belli Smith</p>
                                <p className=' font-normal text-[#727272] mb-4'>Designer</p>
                            </div>
                            <Image 
                            src={""}
                            alt={""}
                            width={0}
                            height={0}
                            />
                        </div>
                        <p className=' font-normal p-3 text-[#727272]'>Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection