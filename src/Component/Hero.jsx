import React from 'react'

const Hero = () => {
  return (
    <div className='mt-22 bg-black lg:px-10 py-4'>
      <div className='flex justify-center gap-8 flex-wrap items-center'>


        {/* LEFT BOX WHERE WE HAVE THE FOR USER PANNEL */}
        <div className='lg:flex-1  '>
          <h1 className='lg:text-5xl text-2xl mb-4 font-bold uppercase text-[#8789c0]'>Capture Your <span className='text-[#6DE2E5]'>World Upgrade Your</span>  Camera Today!</h1>
          <h2 className='lg:text-2xl text-xl font-medium text-[#6DE2E5] mb-6'>Buy,sales,services and Upgrade gear all in one place</h2>
          <div className='social-icon flex gap-x-4 mb-6'>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div>
            <button className='px-10 py-2 bg-[#484965] rounded-xl font-medium cursor-pointer'>Expore All</button>

          </div>
        </div>

        {/* RIGHT WEHERE WE HAVE THE IMAGE RELATED TO THE CAMERA */}
        <div className='lg:flex-1  flex justify-center hero-img'>
          <img src="https://images.unsplash.com/photo-1645907169133-3fd877ef2a8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbWVyYSUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" className='h-116 w-116 rounded-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Hero