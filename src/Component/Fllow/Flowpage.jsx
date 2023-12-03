import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Flowpage = () => {
  return (
    <div>
    <div className='bg-white p-5 w-[250px] mt-4 '>
  <p className='text-1xl font-bold text-primary'>Flowpage</p>
<div className='flex justify-center mt-4 text-1xl'>
<FaSquareInstagram  className='text-4xl text-orange '/>
<p className='text-2xl font-sans font-bold'>Instragram</p>
</div>

<div className='flex justify-center mt-4 text-1xl'>
<FaGithub  className='text-4xl  '/>
<p className='text-2xl font-sans font-bold'>Github</p>
</div>




    </div>
    
</div>
  )
}

export default Flowpage