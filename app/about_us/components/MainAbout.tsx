import Image from "next/image"
import mainImg from "../../../Assets/images/abt.png"
import logo1 from "../../../Assets/images/logo1.png";
import logo2 from "../../../Assets/images/logo2.png";
import logo3 from "../../../Assets/images/logo3.png";
import logo4 from "../../../Assets/images/logo4.png";
import logo5 from "../../../Assets/images/logo5.png";

const MainAbout = () => {

  return (
      <div className='sectionContainer px-4 space-y-6'>
        <div className='grid gap-7 my-8 xl:grid-cols-2'>
            <div>
                <Image 
                  src={mainImg}
                  alt='boy image'
                  
                />
            </div>

            <div className=' space-y-3 '>
              <h1 className='hero_text text-[#FF6D6D] font-normal text-[20px] md:text-[35px]'>About Us</h1>
              <h1 className='hero_text_big text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[30px] font-extrabold text-[#2E4049]'>Solutions to Help People in Need and Save the Planet</h1>
              <p className='text-[#727272] text-[15px] 2xl:text-[35px]'>Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className='bg-[#DEF1F0] py-3 px-4 text-[15px] 2xl:text-[35px]'>
                <p className='text-[#538582]'>Save the Children believes every child deserves a future.</p>
              </div>
              <button className='bg-[#2E4049] text-white big_btn'>MORE ABOUT</button>
            </div>
          </div>

          <div className='w-full h-[1px] bg-[#D0D0D0]'></div>
          <div className='grid md:grid-cols-3  justify-center items-center gap-9 xl:grid-cols-5'>
            <Image 
            src={logo1}
            alt={""}
            width={90}
            height={90}
            />

            <Image 
            src={logo2}
            alt={""}
            width={90}
            height={90}
            />

            <Image 
            src={logo3}
            alt={""}
            width={90}
            height={90}
            />

            <Image 
            src={logo4}
            alt={""}
            width={90}
            height={90}
            />

            <Image 
            src={logo5}
            alt={""}
            width={90}
            height={90}
            />
          </div>
          <div className='w-full h-[1px] bg-[#D0D0D0]'></div>
      </div>
      )
}

export default MainAbout