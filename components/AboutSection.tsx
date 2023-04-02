/* eslint-disable @next/next/no-img-element */
import tick from "../Assets/images/tick.png"
const AboutSection = () => {
  return (
      <section className=" px-3 mb-6 2xl:mt-[80px] mt-[80px] py-10 space-y-5 gap-5 md:mx-[100px] lg:mx-[100px] xl:mx-[210px] 2xl:mx-[270px]  block lg:flex lg:flex-row justify-center items-center ">
          <div className='flex-1 '>
              <h1 className='hero_text text-[#FF6D6D] font-normal text-[20px] md:text-[35px]'>About Us</h1>
              <h1 className='text_shippori'>Help People,</h1>
              <h1 className='hero_text_big text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-[#2E4049]'>Our Main Goals</h1>
              <p className='text-[#727272] text-[15px] 2xl:text-[35px]'>Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p className='text-[#727272] pt-7 pb-4 text-[15px] 2xl:text-[35px]'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining when an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.</p>
              <button className='bg-[#FF6D6D] text-white big_btn'>MORE ABOUT</button>
          </div>
          <div className='bg-[#ECF1F0] text-[#2E4049] space-y-5 px-8 py-7 mb-[20px] md:py-[70px]'>
                <div className=" flex-1 gap-3 text-[#727272]   grid grid-cols-2 bg-[#ECF1F0]">
                    <div className='flex items-center font-medium gap-2'>
                        <img src={tick.src} 
                            alt="tick"
                        />
                        <p>Food Donation</p>
                    </div>
                    <div className='flex flex-1 items-center font-medium gap-2'>
                        <img src={tick.src} 
                            alt="tick"
                        />
                        <p>Water Supply</p>
                    </div>
                    <div className='flex items-center font-medium gap-2'>
                        <img src={tick.src} 
                            alt="tick"
                        />
                        <p>Money Donation</p>
                    </div>
                    <div className='flex items-center font-medium gap-2'>
                        <img src={tick.src} 
                            alt="tick"
                        />
                        <p>Education Donation</p>
                    </div>
                    <div className='flex items-center font-medium gap-2'>
                        <img src={tick.src} 
                            alt="tick"
                        />
                        <p>Dress Donation</p>
                    </div>
                    <div className='flex items-center font-medium gap-2'>
                        <img src={tick.src} 
                            alt="tick"
                        />
                        <p>Toys Donation</p>
                    </div>
               </div>
               <div className='space-y-2 mb-5'>
                    <p className='hero_text_big  text-[#2E4049] text-[25px] font-extrabold'>Total Donation</p>
                    <div className='progress_container'>
                        <div className='progress'></div>
                    </div>
                    <div className='flex justify-between  hero_text_big text-[20px]'>
                        <p className='font-bold text-[#2E4049] hero_text_big'>Collection - $5M</p>
                        <p className='font-bold text-[#2E4049] hero_text_big'>Goal - $10M</p>
                    </div>
               </div>
               <button className='bg-white text-black font-medium py-4 px-6 rounded-full'>DONATE NOW</button>
          </div>
      </section>
  )
}

export default AboutSection