import React from 'react'

const Hero = () => {
  return (
    <div className='mt-2 bg-black'>
      <div className='flex justify-center flex-wrap items-center'>
        {/* LEFT BOX WHERE WE HAVE THE FOR USER PANNEL */}
        <div>
          <h1>Capture Your World Upgrade Your  Camera Today!</h1>
          <h2>Buy,sales,services and Upgrade gear all in one place</h2>
          <div>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        {/* RIGHT WEHERE WE HAVE THE IMAGE RELATED TO THE CAMERA */}
        <div>
          <img src="https://images.unsplash.com/photo-1645907169133-3fd877ef2a8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbWVyYSUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero