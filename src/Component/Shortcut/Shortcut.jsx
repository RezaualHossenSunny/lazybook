import React from 'react'
import { CiMemoPad } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { MdBloodtype } from "react-icons/md";
import { MdVideoCameraFront } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
const Shortcut = () => {
  return (
    <div>
        <div className='bg-white p-5 w-[250px] mt-4 '>
      <p className='text-2xl font-bold text-primary'>Your shortcuts</p>
<div className='flex justify-center mt-4 text-1xl'>
    <CiMemoPad  className='text-4xl text-orange '/>
    <p className='text-2xl font-sans font-bold'>Memoris</p>
</div>

<div className='flex justify-center mt-4 text-1xl'>
    <IoSaveOutline   className='text-4xl text-primary '/>
    <p className='text-2xl font-sans font-bold text-center'>Gaming</p>
</div>
<div className='flex justify-center mt-4 text-1xl'>
<MdBloodtype className='text-4xl text-red-500  '/>
    <p className='text-2xl font-sans font-bold text-center'>Balod Do</p>
</div>
<div className='flex justify-center mt-4 text-1xl'>
<MdVideoCameraFront className='text-4xl text-cyan-500  '/>
    <p className='text-2xl font-sans font-bold text-center'>Live Ved</p>
</div>
<div className='flex justify-center mt-4 text-1xl'>
<FaFlag 
 className='text-4xl text-primary  '/>
    <p className='text-2xl font-sans font-bold text-center'>Memoris</p>
</div>
        </div>
    </div>
  )
}

export default Shortcut