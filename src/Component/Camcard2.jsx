import React from 'react'
import Slider from './Slider'

const Camcard2 = () => {
    const image = ["https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/l/i/a/ilce-6100x-24-2-ilce-6100x-sony-original-imah8ptevgtfbssg.jpeg?q=70", "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/0/q/h/-original-imah4zgvz9fwzdh4.jpeg?q=70&crop=false", "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/k/n/9/-original-imah4zgv4gzqzq7e.jpeg?q=70&crop=false", "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/o/2/2/-original-imah4zgvk858m6un.jpeg?q=70&crop=false"]

    return (
        <div className='bg-white flex text-black lg:mx-10 mx-5 lg:mt-10 mt-4 items-center rounded-xl lg:px-10 py-4'>

            <div className='lg:flex-1'>
                <Slider image={image} />
            </div>
            <div className='lg:flex-1'>
                <h1 className='text-4xl font-bold '>SONY ILCE-6100X Mirrorless   (Black)</h1>
                <div className='flex  items-center gap-x-2'><img src="https://t4.ftcdn.net/jpg/06/67/89/47/360_F_667894765_MH5TJV40fRTBghofXYDHWjyuxWxCd4Ob.jpg" alt="" className='h-14' />
                    <span className='text-sm font-normal'>10k+ reviews</span></div>
                <h2 className='text-2xl font-semibold mb-2'>SONY ILCE-6100X Mirrorless Camera Body with with SELP16502 & SEL55210  (Black)</h2>
                <p className='text-sm text-gray-500 mb-4'>SONY ILCE-6100X Mirrorless Camera Body with SELP16502 & SEL55210 (Black), featuring a powerful 24.2MP APS-C sensor for exceptional image clarity, fast hybrid autofocus with real-time Eye AF for precise subject tracking, and a versatile dual-lens kit that covers wide-angle to telephoto shooting for all creative needs.</p>
                <div>
                    <span className='text-2xl font-bold mr-2'>₹73,990</span> <span className='line-through text-sm mr-2 text-gray-600'>₹89,990</span> <span>17% off</span>
                </div>
                <div className='mt-4'>
                    <button className='px-6 py-2 rounded-xl bg-green-600 text-white font-bold mr-4 cursor-pointer'>Add to Cart</button>
                    <button className='px-6 py-2 rounded-xl bg-green-600 text-white font-bold cursor-pointer '>Buy Now</button>
                </div>
            </div>

        </div>
    )
}

export default Camcard2