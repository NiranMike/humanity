import Image from "next/image"
import heroBg from "../../../Assets/images/aboutBg.png"

const AboutHero = () => {
  return (
    <section className='lg:px-[210px] md:px-[180px] px-4 h-screen relative '>
        <Image
        className='backg object-cover'
        src={heroBg}
        alt="Background Image"
        fill
        priority
      />
        <div className='flex-col 2xl:items-center h-screen z-10 my-auto flex justify-center'>
          <div className="  z-10 ">
            <h1 className='hero_text text-white font-normal text-[30px] md:text-[50px]'>What We Do...</h1>
            <p className="hero_text_big text-white text-[40px] md:text-[50px] lg:text-[70px] font-extrabold">About our</p>
            <p className="hero_text_big text-white text-[40px] md:text-[50px] lg:text-[70px] font-extrabold">Organization</p>
          </div>
            
      </div>
    </section>
  )
}

export default AboutHero