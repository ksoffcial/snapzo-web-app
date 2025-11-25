import React, { useState } from 'react'
import { CircleChevronRight, CircleChevronLeft } from 'lucide-react'

const Slider = ({image}) => {
    
    const [imgnum, setImgnum] = useState(0)

    const increasenum = () => {
        if(imgnum<3){
            setImgnum((prev) => prev + 1)
        }else{
            setImgnum(0)
        }
    }

    const decreasenum = () => {
        if (imgnum >0) {
            setImgnum((prev) => prev - 1)
        }else{
            setImgnum(3)
        }
    }

    setTimeout(() => {
        if(imgnum<3){
            setImgnum(imgnum+1)
        }
        else{
            setImgnum(0)
        }
    }, 2000);

    return (
        <div className='flex items-center justify-center gap-x-10 mt-20 bg-white'>
            <button onClick={decreasenum} className=' bg-white cursor-pointer rounded-xl text-black flex justify-center items-center'>
                <CircleChevronLeft size={50} strokeWidth={3} absoluteStrokeWidth />
            </button>
            <img src={image[imgnum]} alt="" className='h-100 w-80 object-contain rounded-2xl' />
            <button onClick={increasenum} className=' bg-white cursor-pointer rounded-xl text-black flex justify-center items-center'>
                <CircleChevronRight size={50} strokeWidth={3} absoluteStrokeWidth />
            </button >
        </div>
    )
}

export default Slider