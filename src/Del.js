import React, { useState } from 'react'
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbMessage2 } from "react-icons/tb";

import { FaCcVisa } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import Price from './Price';
const Del = () => {
  const [showDel, setShowDel] = useState(false);

  const handleContinueClick = () => {
    setShowDel(true);
  };
  return (
    <div className="flex flex-col h-full w-full">
      {
        showDel ? (
          <Price />
        ) : (<>
        <div className="grid grid-cols-1 md:grid-cols-3 h-10 md:h-16 mt-10">
        <div className="flex items-center md:ml-14">
          <img className="h-7 w-15" src="nike.png" alt="Nike Logo" />
        </div>
        <div className="hidden md:flex items-center justify-center"></div>
        <div className="flex items-center justify-center space-x-10 md:space-x-6">
          <h2 className="font-sans text-base md:text-lg">000 800 100 9538</h2>
          <IoBagOutline className="" />
          <CgProfile className="" />
          <TbMessage2 className="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  h-full w-full mt-10 md:mt-20">
        <div className="flex flex-col items-center  p-4 ">
          
        <h1 className="mt-6  md:text-xl font-normal">When you like to get the order?</h1>
          <div className="relative w-full md:w-96 bg-white mt-4">
            <input
              type="text"
              id="floating_outlined"
              className="w-full px-2.5 pb-2.5 pt-4 text-sm text-black bg-transparent rounded-lg border-2 border-black appearance-none dark:text-black dark:border-grey-300 dark:focus:border-grey-300 focus:outline-none focus:ring-0 focus:border-grey-300 peer"
              placeholder=" "
              disabled
            />
            <label
              htmlFor="floating_outlined"
              className="text-center absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              <div className='flex flex-row  justify-evenly '>
              <span className='w-60  '>Arrives Thu, 14 Dec - Web, 3 Jan</span>  <span className='text-gray-500  w-20'>₹ 1 250</span>
              </div>
            </label>
          </div>


          <h1 className="mt-6 text-lg md:text-xl  font-normal">Arrives Thu, 14 Dec - Web, 3 Jan</h1>
            <img src='shoe.png' className='w-20 h-15 mt-8 '></img>
            <h1 className="mt-6  md:text-sm font-normal text-gray-500">This is an international shipment requiring custom clearance</h1>
            <button
          className="w-full md:w-96 h-14 mt-4 rounded-full bg-black text-white border-black border-2"
          onClick={handleContinueClick}
        >
          Continue
        </button>

        </div>

        <div className=" flex flex-col items-center">
        <h1 className="mt-6  md:text-xl font-normal">Order Summary</h1>
        <div className='flex flex-col w-full items-center'>
        <div className='flex flex-row items-center'>
        <p className="mt-6  md:text-sm font-normal w-60 text-gray-500">Subtotal</p>
        <p className="mt-6  md:text-sm font-normal w-20 text-gray-500">₹ 9 195</p>
        </div>
        <div className='flex flex-row items-center'>
        <p className="mt-4  md:text-sm font-normal w-60 text-gray-500">Delivery</p>
        <p className="mt-4  md:text-sm font-normal w-20 text-gray-500">₹ 1 250    </p>
        </div>
        <div className='flex flex-row items-center'>
        <p className="mt-4  md:text-sm font-normal w-60">Total</p>
        <p className="mt-4  md:text-sm font-normal w-20">₹ 10 445    </p>
        </div>
        </div>

        <h1 className="mt-6 text-sm  md:text-sm   font- bold">Arrives Thu, 14 Dec - Web, 3 Jan</h1>
        <div className='flex flex-row items-center'>
        <div className='w-60'>
        <img src='shoe.png' className='w-20 h-15 mt-8 '></img>
        </div>
        <div className='flex flex-col mt-4 w-30'>
        <p className='text-black text-xs font-semibold'>Jordan Nu</p>
        <p className='text-black text-xs font-semibold'>Retro 1 Low</p>
        <p className='text-black text-xs font-semibold'>Men's shoes</p>
        <p className='text-gray-500 text-xs font-semibold'>Qty-1</p>
        <p className='text-gray-500 text-xs font-semibold'>Size - UK 7.5</p>
        <p className='text-gray-500 text-xs font-semibold'>₹ 9 195</p>
        </div>
        </div>



        </div>
      </div>

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
        
        </>)
      }
      



    </div>
  )
}

export default Del