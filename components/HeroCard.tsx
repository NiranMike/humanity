/* eslint-disable @next/next/no-img-element */
import vid from "../Assets/images/Video.png"


const HeroCard = () => {
  return (
    <div className=' lg:flex absolute  mx-[210px] hidden lg:top-[650px]  z-20'>
        <div className=' flex-1  px-6 bg-[#77D7D3] '>
          <div className='mt-4'>
            <p className='hero_text_big text-2xl font-extrabold'>Education</p>
            <p className="text-[20px]  font-light">Below Poverty Line is enchmark used by the government of India  economic disadvantage.</p>
            <button className='py-3 my-3 px-5 bg-white rounded-full font-normal'>DISCOVER</button>
          </div>
        </div>
        <div className=' flex-1  px-6 bg-[#2E4049]'>
          <div className='mt-4'>
              <p className='hero_text_big text-white text-2xl font-extrabold'>Become a Volunteer</p>
              <p className="text-[20px] text-white  font-light">Below Poverty Line is enchmark used by the government</p>
              <a href="#" className=" underline text-white">JOIN ORGANIZATION</a>
          </div>
        </div>
        <div className=' flex-1 h-full'>
          <img src={vid.src}
            alt="vid"
            className='object-contain h-full '
          />
        </div>
    </div>
  )
}

export default HeroCard