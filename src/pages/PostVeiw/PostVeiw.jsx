import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiFillMessage } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { GiRoyalLove } from "react-icons/gi";
const PostVeiw = () => {
    const [loveshow,setLoveShow]=useState(false);
    const db = getDatabase();
   const[postData,setPostdata]=useState([]);
    useEffect(()=>{
        const postRef = ref(db, 'post/');
        onValue(postRef, (snapshot) => {
          console.log(snapshot.val());
          let arr=[];
          snapshot.forEach((item)=>{
            arr.push(item.val());
          })
          setPostdata(arr)
        });   
    },[])

  return (
    <div  className='w-full h-screen bg-primary '>
   <div>
   <Link to='/'> <FaHome  className='text-5xl text-orange'/></Link>
   </div>
   
  
   {
    postData.map((item)=>(
        <div className='bg-white w-[700px] h-[100px] ml-[700px] text-center inline-block overflow-hidden'>
        {
          <di>
         
          <h1 className='font-inter font-semibold text-3xl mt-4'>{item.post}</h1>
         <div className='flex gap-20 justify-center text-center text-2xl mt-4'>

         {
            loveshow ?
            <GiRoyalLove onClick={()=>setLoveShow(!loveshow)} className='text-red-500' />
            :
            <GiSelfLove  onClick={()=>setLoveShow(!loveshow)}/>
         }
         
          <AiFillMessage className='tex-2xl  text-violet-600' />
        
        
         </div>
          
          </di>
        }
        </div>
    ))
   }
   
   
   
    </div>
  )
}

export default PostVeiw