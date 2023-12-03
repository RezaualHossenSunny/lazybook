import React from 'react'
import { FaHome } from "react-icons/fa";
import { AiOutlineGroup } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='flex p-3 ml-[170px] gap-36 cursor-pointer'>
        <FaHome className='text-5xl text-center text-white'/>
        <Link to='/home'> <AiOutlineGroup className='text-5xl text-center text-white' /></Link>
       
        <GrGroup className='text-5xl text-center text-white  ' />
        <MdOutlineVideoSettings className='text-5xl text-center text-white  '/>
        <MdOutlineVideogameAsset className='text-5xl text-center text-white  '/>
    </div>
  )
}
