import React from 'react'

const BoxSlider = () => {
    const sliderData = [
        {
            icon: <i className='fa-solid fa-truck-fast'></i>,
            heading: "Free Shipping",
            desc: "We’ll deliver your camera safely to your doorstep at no extra cost — fast, secure, and hassle-free."
        },
        {
            icon: <i className="fa-solid fa-comments-dollar"></i>,
            heading: "Best Price Grantuee",
            desc: "Our Best Price Guarantee ensures you get unbeatable value on every camera."
        },
        {
            icon: <i className="fa-solid fa-arrows-spin"></i>,
            heading: "Easy Return",
            desc: "If your camera doesn’t meet your expectations, simply return it for a quick replacement or refund."
        }
    ]
    return (
        <div className='bg-black lg:px-10 py-10'>

            <div className='flex gap-8 flex-wrap mt-5 '>
                {
                    sliderData.map(data => (
                        <div className='bg-white/10 px-6 py-3 lg:flex-1 rounded-lg'>
                            <h2 className='text-4xl '>{data.icon}</h2>
                            <h2 className='text-3xl font-bold my-2 text-[#7CC6FE]'>{data.heading}</h2>
                            <p className='text-[#BEC2E0] font-semibold'>{data.desc}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default BoxSlider