import cardImg from "../Assets/images/cause2.png"
import Image from "next/image"

type Props = {
  image: string | null;
  description: string;
  percentage: number;
  donation: string;
}
const CardCause = ({image, description, percentage, donation}:Props) => {
  return (
    <div className=''>
          <div className='md:w-[280px] relative w-[240px]  bg-white'>
            <div className=" bg-white z-10">
                <p className='text-[#FF6D6D] m-2 bg-white py-[2px] px-2 absolute top-0 z-10'>85%</p>
            </div>
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