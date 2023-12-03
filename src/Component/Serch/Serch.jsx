import React from 'react'
import { BsFillSearchHeartFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
const Serch = () => {
  return (
   <div>
     <div className='relative '>
    <input className='w-[300px] p-5 rounded-3xl font-inter font-bold focus: outline-none text-1xl px-[70px] cursor-pointer ' type='text' placeholder='search Lazy Book'></input>
    <BsFillSearchHeartFill className='absolute top-[20px] left-[80px] text-2xl text-orange cursor-pointer' />
    </div>
   </div>
  )
}

export default Serch