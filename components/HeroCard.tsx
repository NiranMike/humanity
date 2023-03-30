/* eslint-disable @next/next/no-img-element */
import vid from "../Assets/images/Video.png"


const HeroCard = () => {
  return (
    <div className='absolute  flex  lg:top-[660px] left-[209px] z-20'>
        <div className='py-10 px-6 bg-[#77D7D3] '>
          <p className='hero_text_big text-2xl font-extrabold'>Education</p>
          <p className="text-[20px] my-1 font-light">Below Poverty Line is enchmark used by the government of India  economic disadvantage.</p>
          <button className='py-3 my-3 px-5 bg-white rounded-full font-normal'>DISCOVER</button>
        </div>
        <div className='py-10 px-6 bg-[#2E4049]'>
          <p className='hero_text_big text-white text-2xl font-extrabold'>Become a Volunteer</p>
          <p className="text-[20px] text-white my-1 font-light">Below Poverty Line is enchmark used by the government</p>
          <a href="#" className=" underline text-white">JOIN ORGANIZATION</a>
        </div>
        <div className='py-10 h-full'>
          <img src={vid.src}
            alt="vid"
            className='object-contain '
          />
        </div>
    </div>
  )
}

export default HeroCard