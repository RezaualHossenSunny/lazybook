import React, { useEffect, useState } from 'react'
import regi from '../../assets/user.png';
import { getDatabase, ref, onValue } from "firebase/database";


const Userlist = () => {
    const db = getDatabase();
    const[userData,setUserdata]= useState([]);
    useEffect(()=>{
        const UserRef = ref(db, 'users/');
        onValue(UserRef, (snapshot) => {
          console.log(snapshot.val());
          let arr=[];
          snapshot.forEach((item)=>{
            arr.push(item.val());
          })
          setUserdata(arr)
        });   
    },[])
    console.log('userdat',userData);
  return (
   
    <div className='h-[340px]  px-[28px] bg-slate-50 mt-8 ml-3 w-full overflow-y-scroll'>
    <h1 className='font-inter text-3xl font-bold mt-1 text-primary'>Lazy Book user</h1>
{
    userData.map((item)=>(
        <div className='flex items-center mt-4 ml-4 border-b border-yellow-300 pb-[10px]'>
    <div><img src={regi}></img></div>
    <div>
    <p className="font-inter font-bold text-[20px] w-[160px] text-orange text-center ml-1 mt-1">{item.username}</p>
    <p className='text[10px] font-mono font-semibold text-primary'>Dhaka</p>
    </div>
    <div>
    <button  className='font-inter text-[14px] bg-orange text-white text-center  p-2  rounded-lg cursor-pointer ml-[40px]' >ADD</button>
    </div>
 </div>
    ))
}
    </div>
    
  )
}

export default Userlist