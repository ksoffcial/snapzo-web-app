import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../Contexdata'

const Cart = () => {
  const [details, setDetails] = useContext(dataContext)

  const total = details.reduce((sum, item) => {
    return sum + parseInt(item.sellPrice);
  }, 0);



  return (
    <div className='mt-24'>
      <h1 className='text-center font-bold text-5xl'>Shopping Cart</h1>

      <div className='flex justify-between mt-4 lg:gap-x-16 lg:mx-8 px-4'  >
        {/* Order related product details  */}

        <div className='bg-white/80 text-black w-full rounded-xl p-4'>
          <h2 className='text-3xl font-bold mb-4'>product info</h2>
          <div className='px-2 '>
            {details.map((data, idx) => (
              <div key={idx} className='flex items-center rounded-xl bg-white mb-2 px-4 py-2 gap-x-6'>
                <img src={data.image} alt="" className='size-28 object-contain' />
                <h2 className='w-40 font-bold'>{data.name}</h2>
                <div>
                  <span className='text-2xl font-bold'>₹{data.sellPrice} </span>
                  <span className=' line-through' >₹{data.orgPrice} </span>
                </div>
                <h2>{data.discout} </h2>
                <div className=' flex gap-x-4 px-2 text-3xl bg-black/10 rounded-xl py-2'>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <h2>₹{data.sellPrice}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Here order summary */}
        <div className='w-1/3 bg-white text-black rounded-xl p-4'>
          <h1 className='text-3xl font-bold mb-4'>Order Summary</h1>

          <div className='px-4 flex flex-col gap-y-2'>
            <div className='flex justify-between'>
              <span>Items</span>
              <span>0</span>
            </div>

            <div className='flex justify-between'>
              <span>SubTotal</span>
              <span>{total}</span>
            </div>
            <div className='flex justify-between'>
              <span>Shipping</span>
              <span>0</span>
            </div>
            <div className='flex justify-between'>
              <span>Coupon Discout</span>
              <span>0</span>
            </div>
            <div className='flex justify-between'>
              <span>Total</span>
              <span>{total}</span>
            </div>
            <button className='bg-amber-500 py-2  rounded-2xl mt-4 cursor-pointer'>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart