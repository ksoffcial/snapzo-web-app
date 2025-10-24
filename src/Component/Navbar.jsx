import React from 'react'

const Navbar = () => {
    return (
        <div >
            {/* NAVBAR IS  STARTING FORM  HERE */}
            <nav className=' flex lg:px-10 items-center justify-between py-4 bg-black'>
                {/* THIS IS THE LOGO SECTION  */}
                <div className='flex items-center text-5xl font-bold'>
                    {/* <h2>logo <br /> pannel</h2> */}
                    <h2 className='text-blue-800 ml-2'>sn<span className='text-red-700'>apZ</span>o</h2>
                </div>
                {/* SEARCH BUTTON IS CREATED AND MANAGED USING THE USE STATE   */}
                <div>
                    <div className='w-full flex gap-x-3'>
                        <span className='flex px-3 py-1.5 border rounded-lg gap-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </span>
                            <span>
                                <input type="text" placeholder='search here,product,services etc....' className='outline-none border-none lg:w-[17rem]'/>
                            </span>
                        </span>
                        <button type='sumbit' className='bg-[#8789c0] px-3 py-1 rounded-lg'>Search..</button>
                    </div>
                </div>

                {/* THIS SECTIO IS USE TO FOR EXTERNAL BUTTON   */}
                <div className='flex gap-x-6'>

                    <button className='navbar_btn'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                        </svg>
                        </span>
                        <span>Contact Us</span>
                    </button>

                    <button className='navbar_btn'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>

                        </span>
                        <span>
                            Sign Up
                        </span>
                    </button>

                    <button className='navbar_btn'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </span>
                        <span>
                            login
                        </span>
                    </button>

                    <button className='navbar_btn'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </span>
                        <span>
                            Cart
                        </span>

                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar