import React from 'react'
import { RiBarChartGroupedLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
const Cominity = () => {
  return (
    <div>
        <div className='bg-white p-5 w-[250px] mt-4 '>
      <p className='text-1xl font-bold text-primary'>Your community chats
Your shortcuts</p>
<div className='flex justify-center mt-4 text-1xl'>
<RiBarChartGroupedLine className='text-4xl text-orange '/>
    <p className='text-2xl font-sans font-bold'>Mern Cit</p>
</div>
<div className='flex justify-center mt-4 text-1xl'>
<FaComputer className='text-4xl text-primary '/>
    <p className='text-2xl font-sans font-bold'>CSE Basti</p>
</div>



        </div>
    </div>
  )
}

export default Cominity