import React from 'react'
import Image from "next/image"
import man1 from "../Assets/images/m3.png";
import man2 from "../Assets/images/w2.png";
import logo1 from "../Assets/images/logo1.png";
import logo2 from "../Assets/images/logo2.png";
import logo3 from "../Assets/images/logo3.png";
import logo4 from "../Assets/images/logo4.png";
import logo5 from "../Assets/images/logo5.png";
import colon from "../Assets/images/colon.png";




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
                        <div className='flex justify-between items-center'>
                            <div className='px-3'>
                                <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Belli Smith</p>
                                <p className=' font-normal text-[#727272] mb-4'>Designer</p>
                            </div>
                            <Image 
                            src={colon}
                            alt={""}
                            width={30}
                            height={0}
                            className='object-contain'
                            />
                        </div>
                        <p className=' font-normal p-3 text-[#727272]'>Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.</p>

                    </div>
                </div>
                <div className='flex p-3 flex-col sm:p-3 sm:flex-row mx-auto bg-[#ECF1F0] justify-center items-center gap-3'>
                    <Image 
                      src={man2}
                      alt={""}
                      width={0}
                      height={0}
                      className='sm:w-full w-full  object-cover'
                    />
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='px-3'>
                                <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Sara Taylor</p>
                                <p className=' font-normal text-[#727272] mb-4'>Donator</p>
                            </div>
                            <Image 
                            src={colon}
                            alt={""}
                            width={30}
                            height={0}
                            className='object-contain'
                            />
                        </div>
                        <p className=' font-normal p-3 text-[#727272]'>Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.</p>

                    </div>
                </div>
            </div>
              <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
                  <div className=''>
                    <p className='hero_text_big text-center text-[#2E4049] text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>200k</p>
                    <p className='font-normal text-center text-[#727272]'>Received Donations From Our People</p>
                  </div>
                  <div className=''>
                    <p className='hero_text_big text-center text-[#2E4049] text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>99k</p>
                    <p className='font-normal text-center text-[#727272]'> Projects Done With The Help Of Donators</p>
                  </div>
                  <div className=''>
                    <p className='hero_text_big text-center text-[#2E4049] text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>200k</p>
                    <p className='font-normal text-center text-[#727272]'>People We Helped on 2020</p>
                  </div>
                  <div className=''>
                    <p className='hero_text_big text-center text-[#2E4049] text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>10.7k</p>
                    <p className='font-normal text-center text-[#727272]'>With Our Volunteers We’ve Solved Many Causes</p>
                  </div>
            </div>
            <div className='w-full h-[1px] bg-[#D0D0D0]'></div>
              <div className='grid md:grid-cols-3  justify-center items-center gap-9 xl:grid-cols-5'>
                <Image 
                src={logo1}
                alt={""}
                width={90}
                height={90}
                />

                <Image 
                src={logo2}
                alt={""}
                width={90}
                height={90}
                />

                <Image 
                src={logo3}
                alt={""}
                width={90}
                height={90}
                />

                <Image 
                src={logo4}
                alt={""}
                width={90}
                height={90}
                />

                <Image 
                src={logo5}
                alt={""}
                width={90}
                height={90}
                />
              </div>
        </div>
    </section>
  )
}

export default TestimonialSection