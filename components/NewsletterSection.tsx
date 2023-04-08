

const NewsletterSection = () => {
  return (
    <section>
        <div className='grid lg:grid-cols-2'>
            <div className='py-10 space-y-4 px-3 md:px-14 bg-[#FF6D6D]'>
                <div className=''>
                    <p className="hero_text_sm text-white">Subscribe</p>
                    <p className='hero_text_big  text-white text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>Newsletter</p>
                </div>
                <p className='text-white'>Sign up for our monthly newsletter to get the latest news, volunteer opportunities</p>
                  <form className='flex gap-4 justify-between'>
                      <input type='email' placeholder='Enter your Email Address' className="rounded-full px-4 w-full"/>
                      <button className='bg-[#2E4049] text-white py-3 px-5 rounded-full text-[14px]'>SEND</button>
                </form>
            </div>
            <div className='py-10 space-y-4 px-3 md:px-14 bg-[#77D7D3ED]'>
                <div className=''>
                    <p className="hero_text_sm text-[#2E4049]">Recent Blog</p>
                    <p className='hero_text_big  text-[#2E4049] text-[20px] lg:text-[35px] xl:text-[35px] 2xl:text-[40px] font-extrabold'>Take A Look At Recent Blog Posts</p>
                </div>
                <button className='bg-[#2E4049] text-white py-3 px-3 rounded-full text-[14px]'>SEE OUR BLOGS</button>

            </div>
        </div>
    </section>
  )
}

export default NewsletterSection