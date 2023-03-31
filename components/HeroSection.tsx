import Image from "next/image"
import heroBg from "../Assets/images/heroBg.png"

const HeroSection = () => {
  return (
    <section className='md:px-[210px] h-screen relative flex-col my-auto flex justify-center'>
        <Image
        className='backg object-cover'
        src={heroBg}
        alt="Background Image"
        fill
      />
        <div className="z-10   ">
            <h1 className='hero_text text-white font-normal text-[50px]'>Need Help...</h1>
            <p className="hero_text_big text-white md:text-[70px] font-extrabold">Being Life Saver</p>
            <p className="hero_text_big text-white md:text-[70px] font-extrabold">For Someone</p>
        </div>
        <div className=' z-10 items-center flex md:max-w-[520px]'>
            <div className='w-3 h-3 bg-white rounded-full'></div>
            <div className='h-[1px] md:w-[310px] bg-white'></div>
            <div className="border px-2 py-2 flex-1 rounded-full text-white">BELOW POVERTY LINE</div>
        </div>
      <div className='z-10 flex gap-4 '>
          <button className='py-3 hero_text_big px-6 text-white font-normal bg-[#FF6D6D] rounded-full'>Donate</button>
          <button className='py-3 hero_text_big px-6  font-normal bg-white rounded-full'>Discover</button>
      </div>
        
        
    </section>
  )
}

export default HeroSection