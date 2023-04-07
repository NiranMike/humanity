import witness1 from "../Assets/images/m1.png";
import witness2 from "../Assets/images/w1.png";
import witness3 from "../Assets/images/m2.png";
import hand from "../Assets/images/hand.png";
import Image from "next/image"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFacebook, BsTwitter, BsPinterest} from "react-icons/bs"

const VolunteerSection = () => {
  return (
      <section className='sectionContainer'>
          <div className='space-y-9'>
            <div className='text-center'>
                <p className="hero_text_sm text-[#FF6D6D]">Team</p>
                <p className='sectionHeader'>Meet Our Volunteers</p>
            </div>
            <div className='flex flex-col  xl:flex-row gap-5'>
                <div>
                    <Image 
                      src={witness1}
                      alt={""}
                      width={0}
                      height={0}
                      className='sm:w-full w-full  object-cover'
                    />
                    <div className='flex flex-col mt-2 gap-3 justify-center items-center'>
                        <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Martin Luther</p>
                        <div className='flex text-[#2E4049] gap-5'>
                            <AiOutlineInstagram />
                            <BsFacebook />
                            <BsTwitter />
                            <BsPinterest />
                        </div>
                    </div>
                </div>

                <div>
                    <Image 
                      src={witness2}
                      alt={""}
                      width={0}
                      height={0}
                      className='sm:w-full w-full  object-cover'
                    />
                    <div className='flex flex-col mt-2 gap-3 justify-center items-center'>
                        <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Martin Luther</p>
                        <div className='flex text-[#2E4049] gap-5'>
                            <AiOutlineInstagram />
                            <BsFacebook />
                            <BsTwitter />
                            <BsPinterest />
                        </div>
                    </div>
                </div>

                <div>
                    <Image 
                      src={witness3}
                      alt={""}
                      width={0}
                      height={0}
                      className='sm:w-full w-full  object-cover'
                    />
                    <div className='flex flex-col mt-2 gap-3 justify-center items-center'>
                        <p className='hero_text_big text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Martin Luther</p>
                        <div className='flex text-[#2E4049] gap-5'>
                            <AiOutlineInstagram />
                            <BsFacebook />
                            <BsTwitter />
                            <BsPinterest />
                        </div>
                    </div>
                </div>
                <div className='bg-[#77D7D3] flex max-w-[250px] h-[360px] xl:h-[360px] 2xl:h-[350px] flex-col justify-center items-center mx-auto space-y-3 '>
                    <Image 
                      src={hand}
                      alt={""}
                      width={0}
                      height={0}
                      className=' object-contain'
                    />
                    <p className='hero_text_big text-center text-[20px] lg:text-[35px] xl:text-[25px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Become a Voluteer</p>
                    <p className=' font-normal text-center text-[#2E4049]'>Centuries but also the leap  electtypesetting, remaining </p>
                    <button className='bg-[#2E4049] text-white big_btn'>JOIN US TODAY</button>
                </div>
            </div>
          </div>
      </section>
  )
}

export default VolunteerSection