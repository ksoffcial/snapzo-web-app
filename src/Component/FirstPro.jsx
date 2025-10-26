import React from 'react'

const FirstPro = () => {
    const productData = [
        {
            image:"https://m.media-amazon.com/images/I/61fl9pliAtL._AC_UY327_FMwebp_QL65_.jpg",
            name:"Tamron 17-70Mm F/2.8 Di",
            desc:"10K+ bought in last month",
            sellPrice:"55,099",
            orgPrice:"67,500",
            discount:"18% Off",
        },
        {
            image:"https://m.media-amazon.com/images/I/81LskAU5h1L._AC_UY327_FMwebp_QL65_.jpg",
            name:"Canon EOS R50 RF-S18-45mm",
            desc:"10K+ bought in last month",
            sellPrice:"63,990",
            orgPrice:"75,995",
            discount:"16% Off"
        },
        {
            image:"https://m.media-amazon.com/images/I/71iKNJ6rVIL._AC_UY327_FMwebp_QL65_.jpg",
            name:"Nikon D7500 20.9MP Digital SLR Camera",
            desc:"10K+ bought in last month",
            sellPrice:"77,500",
            orgPrice:"94,950",
            discount:"18% Off"
        },
        {
            image:"https://m.media-amazon.com/images/I/61fl9pliAtL._AC_UY327_FMwebp_QL65_.jpg",
            name:"Tamron 17-70Mm F/2.8 Di",
            desc:"10K+ bought in last month",
            sellPrice:"55,099",
            orgPrice:"67,500",
            discount:"18% Off"
        },
        {
            image:"https://m.media-amazon.com/images/I/81LskAU5h1L._AC_UY327_FMwebp_QL65_.jpg",
            name:"Canon EOS R50 RF-S18-45mm",
            desc:"10K+ bought in last month",
            sellPrice:"63,990",
            orgPrice:"75,995",
            discount:"16% Off"
        },
        {
            image:"https://m.media-amazon.com/images/I/71iKNJ6rVIL._AC_UY327_FMwebp_QL65_.jpg",
            name:"Nikon D7500 20.9MP Digital SLR Camera",
            desc:"10K+ bought in last month",
            sellPrice:"77,500",
            orgPrice:"94,950",
            discount:"18% Off"
        },
    ]
    return (
        <div className='lg:px-10 mt-16 text-black'>
            <div className='bg-white rounded-lg  p-4'>
                <h2 className='font-bold text-2xl mb-6'>Best Deals </h2>
                <div className='flex flex-wrap gap-8 px-6'>
                    {
                        productData.map(data=> (
                            <div className='flex-1'>
                                <img src={data.image} alt="" className='size-32 object-contain mb-3' />
                                <h2 className='font-semibold mb-2'>{data.name}</h2>
                                <img src="https://t4.ftcdn.net/jpg/06/67/89/47/360_F_667894765_MH5TJV40fRTBghofXYDHWjyuxWxCd4Ob.jpg" alt="" className='w-full h-6 mb-4 object-cover'/>
                                <p className='text-xs mb-1 '>{data.desc} </p>
                                <img src="" alt=""/>
                                <div>
                                    <span className='font-bold mr-1'>₹{data.sellPrice}</span>
                                    <span className='text-xs line-through'>₹{data.orgPrice}</span>
                                    <span className='text-xs ml-2'>{data.discount}</span>
                                </div>
                                <button className='mx-auto px-8 py-2 rounded-lg bg-green-500 font-semibold text-white w-full mt-4'>Buy Now</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FirstPro