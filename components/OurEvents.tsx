import event from "../Assets/images/event.png";
import Image from "next/image"
import { IoMdTime } from "react-icons/io"
import {CiLocationOn} from "react-icons/ci"

const OurEvents = () => {
  return (
    <section className=''>
        <div>
          <p className="hero_text_sm px-3 md:mx-[100px] lg:mx-[100px] xl:mx-[210px] 2xl:mx-[270px]">Our Events</p>
          <div className="px-3 items-center flex md:mx-[100px] justify-between lg:mx-[100px] xl:mx-[210px] 2xl:mx-[270px]">
            <p className="hero_text_big text-[12px] max-w-[660px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-[#2E4049]">Join Upcoming Events Replays & Webinars</p>
            <button className="big_btn bg-[#FF6D6D] text-white">MORE</button>
          </div>
        </div>
        <div className='sectionContainer grid lg:grid-cols-2 gap-6'>
            <div className='space-y-4 mx-3 md:mx-0'>
                <div>
                    <Image 
                      src={event}
                      alt={""}
                      width={0}
                      height={0}
                      className='sm:w-full w-full  object-contain'
                    />
                </div>
                <div className='flex items-center justify-between '>
                    <p>Organized By: Nattasha</p>
                    <div className='flex gap-2 items-center'>
                        <IoMdTime className='text-red-600'/>
                        <p>10:00 AM - 18:00 PM, EVERYDAY</p>
                    </div>
                </div>
                <div className='h-[2px] w-full bg-[#F1EEEC]'></div>
                <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Education for Poor Children</p>
                <p className=' font-normal text-[#727272]'>There are many varieations of passages of injected Lorem Ipsum available,but the majority have.</p>
                <div className='flex gap-1 bg-[#F0F0F0] items-center p-2'>
                    <CiLocationOn className='text-red-600' />
                    <p className='text-[#2E4049]'>Dark Spurt, San Francisco, CA 94528</p>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-3 mx-3 md:mx-0'>
                <div className='flex gap-2'>
                    <div className='px-4 bg-[#2E4049] flex flex-col justify-center items-center'>
                        <p className="hero_text_big text-[12px] max-w-[660px] lg:text-[27px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-white">18</p>
                        <p className='hero_text_big text-[20px] lg:text-[27px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-white'>June</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-normal text-[#727272]'>Organized By : <span className='text-[#FF6D6D]'>Nattasha</span></p>
                        <p className='hero_text_big text-[20px]  xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Healthy Food for Growing</p>
                        <p className='font-normal text-[#727272]'>There are many varieations of passages of injected Lorem Ipsum available.</p>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#F1EEEC]'></div>
                
                <div className='flex gap-2'>
                    <div className='px-4 bg-[#2E4049] flex flex-col justify-center items-center'>
                        <p className="hero_text_big text-[12px] max-w-[660px] lg:text-[27px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-white">18</p>
                        <p className='hero_text_big text-[20px] lg:text-[27px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-white'>June</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-normal text-[#727272]'>Organized By : <span className='text-[#FF6D6D]'>Nattasha</span></p>
                        <p className='hero_text_big text-[20px]  xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Healthy Food for Growing</p>
                        <p className='font-normal text-[#727272]'>There are many varieations of passages of injected Lorem Ipsum available.</p>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#F1EEEC]'></div>

                <div className='flex gap-2'>
                    <div className='px-4 bg-[#2E4049] flex flex-col justify-center items-center'>
                        <p className="hero_text_big text-[12px] max-w-[660px] lg:text-[27px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-white">18</p>
                        <p className='hero_text_big text-[20px] lg:text-[27px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-white'>June</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-normal text-[#727272]'>Organized By : <span className='text-[#FF6D6D]'>Nattasha</span></p>
                        <p className='hero_text_big text-[20px]  xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Healthy Food for Growing</p>
                        <p className='font-normal text-[#727272]'>There are many varieations of passages of injected Lorem Ipsum available.</p>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#F1EEEC]'></div>

            </div>
        </div>
    </section>
  )
}

export default OurEvents