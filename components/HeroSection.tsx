import Image from "next/image"
import heroBg from "../Assets/images/heroBg.png"

const HeroSection = () => {
  return (
    <div className='md:px-[210px] h-screen relative flex-col my-auto flex justify-center'>
        <Image
        className='backg object-cover'
        src={heroBg}
        alt="Background Image"
        fill
      />
        <div className="z-10  ">
            <h1 className='hero_text text-white font-normal text-[50px]'>Need Help...</h1>
            <p className="hero_text_big text-white md:text-[70px] font-extrabold">Being Life Saver</p>
            <p className="hero_text_big text-white md:text-[70px] font-extrabold">For Someone</p>
        </div>
        <div className=' flex divider'>
            <div className='w-3 h-3 z-10 bg-white rounded-full'></div>
        </div>
        
    </div>
  )
}

export default HeroSection