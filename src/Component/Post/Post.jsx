import React, { useState } from 'react'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
const Post = () => {
  const db = getDatabase();
  const [show, setShow]=useState(false);
  const[post,setPost]=useState('');
  const[postEr,setPostEr]=useState('')
  const handleGroup =()=>{
    setShow(!show)
  }

  const hadleUppost =()=>{
if(!post){
  setPostEr('enter a text')
}

    set(push(ref(db, 'post/' )), {
        post:post
    }).then(()=>{
      setPost('')
      setShow(false);
    })
  }
    
  return (
    <div  className='mt-[180px] cursor-pointer'>
    
    
    {
      show ? 
    <div className='relative'>
    <div className=' h-screen w-full absolute top-0 left-0 bg-white mt-[-590px] ml-3 '>


    <div className='mt-[200px]'>
      <input onChange={(e)=> setPost(e.target.value)} className='p-5 w-[1000px] text-parimary tr font-bold h-[300px] focus:outline-none mt-28 bg-slate-400' type='text' placeholder='post' ></input>

      <p className='text-red-500 font-inter text-2xl'>{postEr}</p>
    </div>
    <div className='mt-4'>
      <button onClick={hadleUppost}  className='font-inter text-2xl bg-primary text-white text-center  p-5  cursor-pointer rounded-lg ml-2' >Upload Your post</button>
    <button onClick={handleGroup} className='font-inter text-2xl bg-orange text-white text-center  p-5  cursor-pointer rounded-lg ml-4' >Cancle</button>
    </div>
    </div>

</div>


       :


      <div className='flex'> 
        <p  className='p-3 bg-white border-4 w-[450px] ml-[270px] rounded-xl text-inter font-bold text-center text-primary text-3xl '>Whas Your Maind</p>
        <button onClick={handleGroup} className='font-inter text-2xl bg-orange text-white text-center  p-5  cursor-pointer rounded-lg ml-2' >Create A post</button>
        </div>

    }
    
        
      
       
    </div>
  )
}

export default Post