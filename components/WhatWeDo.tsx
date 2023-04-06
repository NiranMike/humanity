import Image from "next/image";
import medicine from "../Assets/images/Icon.png";
import WaterDelivery from "../Assets/images/OilMassage.png";
import DayCare from "../Assets/images/DayCare.png"
import FoodBar from "../Assets/images/FoodBar.png"
import Geography from "../Assets/images/Geography.png"
import Contract from "../Assets/images/Contract.png"


const WhatWeDo = () => {
  return (
    <section className='flex flex-col items-center justify-center mx-auto lg:mx-[200px] my-14'>
          <div className="space-y-9">
              <div className='text-center'>
                  <p className="hero_text_sm text-[#FF6D6D]">What we do</p>
                  <p className='hero_text_big text-center text-[#2E4049] text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>We do it for Poeple in Need</p>
              </div>
              <div className='grid gap-5 lg:grid-cols-3'>
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={medicine}
                      alt={''}
                      width={0}
                      height={0}
                      className='w-[30px] lg:w-[50px]'
                     />
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] font-extrabold lg:text-[24px] xl:text-[26px]">Medicine Help</p>
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] ">Centuries but also the leap into electronic typesetting, remaining specimen book.</p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={WaterDelivery}
                      alt={''}
                      width={0}
                      height={0}
                      className='w-[30px] lg:w-[50px]'
                     />
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] font-extrabold lg:text-[24px] xl:text-[26px]">Water Delivery</p>
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] ">Centuries but also the leap into electronic typesetting, remaining specimen book.</p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={DayCare}
                      alt={''}
                      width={0}
                      height={0}
                      className='w-[30px] lg:w-[50px]'
                     />
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] font-extrabold lg:text-[24px] xl:text-[26px]">We Care About</p>
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] ">Centuries but also the leap into electronic typesetting, remaining specimen book.</p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={FoodBar}
                      alt={''}
                      width={0}
                      height={0}
                      className='w-[30px] lg:w-[50px]'
                     />
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] font-extrabold lg:text-[24px] xl:text-[26px]">Food Delivery</p>
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] ">Centuries but also the leap into electronic typesetting, remaining specimen book.</p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={Geography}
                      alt={''}
                      width={0}
                      height={0}
                      className='w-[30px] lg:w-[50px]'
                     />
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] font-extrabold lg:text-[24px] xl:text-[26px]">Spread The World</p>
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] ">Centuries but also the leap into electronic typesetting, remaining specimen book.</p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={Contract}
                      alt={''}
                      width={0}
                      height={0}
                      className='w-[30px] lg:w-[50px]'
                     />
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] font-extrabold lg:text-[24px] xl:text-[26px]">Learn Education</p>
                     <p className="hero_text_big text-center text-[#2E4049] text-[13px] ">Centuries but also the leap into electronic typesetting, remaining specimen book.</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default WhatWeDo