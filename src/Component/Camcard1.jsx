import React from 'react'

const Camcard1 = () => {
    return (
        <div className='bg-white flex text-black lg:mx-10 mx-5 lg:mt-10 mt-4 items-center rounded-xl lg:px-10 py-4'>
            <div className='lg:flex-1'>
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70" alt="" className='mx-auto w-full p-16' />
            </div>
            <div className='lg:flex-1'>
                <h1 className='text-4xl font-bold '>Canon PowerShot SX740 HS</h1>
                <div className='flex  items-center gap-x-2'><img src="https://t4.ftcdn.net/jpg/06/67/89/47/360_F_667894765_MH5TJV40fRTBghofXYDHWjyuxWxCd4Ob.jpg" alt="" className='h-14' />
                    <span className='text-sm font-normal'>10k+ reviews</span></div>
                <h2 className='text-2xl font-semibold mb-2'>Sleek with 40x Superzoom for Capturing Shutter Opportunities in Life and Travel</h2>
                <p className='text-sm text-gray-500 mb-4'>This camera’s slim, compact body packs in a 40x zoom, and also features the DIGIC 8 image processor for enhanced image quality. With its short startup time and shooting interval, users can look forward to capturing unexpected photo opportunities. Also includes a variety of movie shooting functions such as 4K movies, 4K time lapse movies and the new Video Snapshot function. Quick, convenient Wi-Fi connection and smartphone pairing enables easy sharing of images and movies on social media.</p>
                <div>
                    <span className='text-2xl font-bold mr-2'>₹42,990</span> <span className='line-through text-sm mr-2 text-gray-600'>₹64,995</span> <span>33% off</span>
                </div>
                <div className='mt-4'>
                    <button className='px-6 py-2 rounded-xl bg-green-600 text-white font-bold mr-4 cursor-pointer'>Add to Cart</button>
                    <button className='px-6 py-2 rounded-xl bg-green-600 text-white font-bold cursor-pointer '>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Camcard1