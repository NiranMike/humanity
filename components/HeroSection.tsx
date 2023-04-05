import Image from "next/image"
import heroBg from "../Assets/images/heroBg.png"

const HeroSection = () => {
  return (
    <section className='lg:px-[210px] md:px-[180px] px-4 h-screen relative '>
        <Image
        className='backg object-cover'
        src={heroBg}
        alt="Background Image"
        fill
      />
        <div className='flex-col 2xl:items-center h-screen z-10 my-auto flex justify-center'>
          <div className="  z-10 ">
            <h1 className='hero_text text-white font-normal text-[30px] md:text-[50px]'>Need Help...</h1>
            <p className="hero_text_big text-white text-[40px] md:text-[50px] lg:text-[70px] font-extrabold">Being Life Saver</p>
            <p className="hero_text_big text-white text-[40px] md:text-[50px] lg:text-[70px] font-extrabold">For Someone</p>
          </div>
          <div className=' z-10 items-center hidden lg:flex md:max-w-[520px]'>
              <div className='w-3 h-3 bg-white rounded-full'></div>
              <div className='h-[1px] md:w-[310px] bg-white'></div>
              <div className="border px-2 py-2 flex-1 rounded-full text-white">BELOW POVERTY LINE</div>
          </div>
          <div className='z-10 flex-start 2xl:mt-5 items-start flex gap-4 '>
            <button className='py-3 hero_text_big px-6 text-white font-normal bg-[#FF6D6D] rounded-full'>Donate</button>
            <button className='py-3 hero_text_big px-6  font-normal bg-white rounded-full'>Discover</button>
          </div>  
      </div>
        
        
    </section>
  )
}

export default HeroSection