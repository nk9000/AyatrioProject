import React from 'react'
import { FaCcVisa } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
const Footer = () => {
  return (
    <div className='w-full h-20 '>
          <div className='w-full flex bg-black h-20 items-center  '>
            <span className='text-white ml-10 text-sm'>India</span>
            <span className='text-gray-500 ml-20 text-sm'>© 2023 All right's reserverd</span>
            <span className='text-gray-500 ml-20 text-sm'>Terms of Use</span>
            <span className='text-gray-500 ml-20 text-sm'>Terms of Sale</span>
            <span className='text-gray-500 ml-20 text-sm'>Privacy Policy</span>
            <span><FaCcVisa  className='bg-white ml-20 h-10 w-20'/> </span>  
            <span><SiPaytm  className='bg-white ml-20 h-10 w-20'/> </span>  
           
          </div>
    </div>
  )
}

export default Footer