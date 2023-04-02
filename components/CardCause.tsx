import cardImg from "../Assets/images/ci1.png"
import Image from "next/image"

const CardCause = () => {
  return (
    <div className=''>
          <div className='md:w-[280px]  w-[240px]  bg-white'>
            <Image 
            src={cardImg}
            className="md:h-[280px] h-[180px] object-cover"
            alt='cardCause'
            height={0}
            width={0}
            />
            <div className='p-3'>
              <p>Big charity: build school for poor children</p>
              <div className='progress_container'>
                  <div className='progress'></div>
              </div>
              <div className='flex pb-8 justify-between  hero_text_big text-[15px]'>
                  <p className='font-bold text-[#2E4049] hero_text_big'>Raised - $5M</p>
                  <p className='font-bold text-[#FF6D6D] hero_text_big'>Goal - $10M</p>
              </div>
              <button className='big_btn bg-[#2E4049] text-white'>DONATE</button>
            </div>
          </div>
      </div>
  )
}

export default CardCause