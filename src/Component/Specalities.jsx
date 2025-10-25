import React from 'react'

const Specalities = () => {
  const specialData = [
    {
      image: "https://images.unsplash.com/photo-1582994254571-52c62d96ebab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      name: "4k lenses"
    },
    {
      image: "https://images.unsplash.com/photo-1557523945-f2b1e20aa7d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fDRrJTIwY2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      name: "4k Camera"
    },
    {
      image: "https://images.unsplash.com/photo-1623621461302-e6b5236629cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRzbHJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      name: "DSLR Camera"
    },
    {
      image: "https://images.unsplash.com/photo-1597378994822-9f850841e676?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRyb25zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      name: "Drons"
    },
    {
      image: "https://images.unsplash.com/photo-1549109926-58f039549485?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      name: "CCTv Camera"
    },
    {
      image: "https://images.unsplash.com/photo-1591558379566-4843b7ddb062?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhJTIwc3BhcmUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      name: "Spare Parts"
    }
  ]
  return (
    <div className='lg:px-10 mt-4 mb-8'>

      <div className='flex flex-wrap gap-4'>
        {
          specialData.map(data => (
            <div className='flex-1 rounded-xl text-center p-4 bg-white/20'>
              <img src={data.image} alt="" className='size-32 rounded-full object-cover mx-auto' />
              <h2 className='mt-4 text-xl font-bold text-purple-100'>{data.name}</h2>
            </div>
          ))
        }
      </div>

      <div className='flex justify-center  mt-6 '>
        <button className='px-10 py-3 text-xl  bg-[#484965] items-center gap-3 inline-flex font-semibold rounded-xl'>
          <span>View All Speclites</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Specalities