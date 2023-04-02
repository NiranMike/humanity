import cardImg from "../Assets/images/ci1.png"
import Image from "next/image"
import CardCause from "./CardCause"

const OurCause = () => {
  return (
    <section className="bg-[#F1EEEC] carou overflow-x-auto py-[30px] lg:py-[60px] ">
        <div>
          <p className="hero_text_sm px-3 md:mx-[100px] lg:mx-[100px] xl:mx-[210px] 2xl:mx-[270px]">Our Causes</p>
          <div className="px-3 items-center flex md:mx-[100px] justify-between lg:mx-[100px] xl:mx-[210px] 2xl:mx-[270px]">
            <p className="hero_text_big text-[12px] max-w-[660px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold text-[#2E4049]">You can help lots of people by donating little.</p>
            <button className="big_btn bg-[#FF6D6D] text-white">MORE</button>
          </div>
      </div>
      <div className='flex pr-9 ml-2 overflow-x-auto gap-4 my-10 md:ml-[100px] lg:ml-[100px] xl:ml-[210px] 2xl:ml-[270px]'>
        <CardCause />
        <CardCause />
        <CardCause />
        <CardCause />
      </div>
        
    </section>
  )
}

export default OurCause