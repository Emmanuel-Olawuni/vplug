import React from 'react'
import CartItems from './CartItems'

const Cartdropdown = () => {
  return (
    <div className='absolute bg-white top-[30px] p-4 right-[10px] z-20 text-black border border-black rounded-[5px] shadow-2xl w-[200px]'>
      <CartItems />
    </div>
  )
}

export default Cartdropdown