import React from 'react'
import regi from '../../assets/group1.png';
import regi1 from '../../assets/group2.png';
const Group = () => {
  return (
    <div>
        <div className='h-[340px]  px-[28px] bg-slate-50 mt-8 ml-3 w-full overflow-y-scroll'>
    <h1 className='font-inter text-3xl font-bold mt-1 text-primary'>Lazy Book Group</h1>

        <div className='flex items-center mt-4 ml-4 border-b border-yellow-300 pb-[10px]'>
    <div><img src={regi}></img></div>
    <div>
    <p className="font-inter font-bold text-[20px] w-[160px] text-primary text-center ml-1 mt-1">Abstergo Ltd.</p>
    <p className='text[10px] font-mono font-semibold text-primary'>Dhaka/gazipur</p>
    </div>
    <div>
    <button  className='font-inter text-[16px] bg-orange text-white text-center  p-3  rounded-lg cursor-pointer ml-[40px]' >+</button>
    </div>
 </div>
 <div className='flex items-center mt-4 ml-4 border-b border-yellow-300 pb-[10px]'>
    <div><img src={regi1}></img></div>
    <div>
    <p className="font-inter font-bold text-[20px] w-[160px] text-primary text-center ml-1 mt-1">Barone LLC.</p>
    <p className='text[10px] font-mono font-semibold text-primary'>Dhaka/Dhanmondi</p>
    </div>
    <div>
    <button  className='font-inter text-[16px] bg-orange text-white text-center  p-3  rounded-lg cursor-pointer ml-[40px]' >-</button>
    </div>
 </div>
   

    </div>
    </div>
  )
}

export default Group