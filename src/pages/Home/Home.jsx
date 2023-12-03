import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Serch from '../../Component/Serch/Serch';
import { Navbar } from '../../Component/navbar/Navbar';
import Logout from '../../Component/Logout/Logout';
import Profile from '../../Component/profile/Profile';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaHandsPraying } from "react-icons/fa6";
import Post from '../../Component/Post/Post';
import { userLoginInfo } from '../../slices/Userslice';
import Userlist from '../../Component/userlist/Userlist';
import Shortcut from '../../Component/Shortcut/Shortcut';
import Group from '../../Component/Group/Group';
import Cominity from '../../Component/Cmonity/Cominity';
import Flowpage from '../../Component/Fllow/Flowpage';

const Home = () => {
  const auth = getAuth();
  const dispatch=useDispatch();
  
  const navigate=useNavigate();
  const data=useSelector(state => state.userLoginInfo.userInfo);
  console.log('vvvvvv',data);
  useEffect(()=>{
    if(!data){
     navigate('/login')
    }
  })
 
  const [verify,setVerify]=useState(false);
  onAuthStateChanged(auth,(user)=>{
    console.log('okkuser' ,user);
    if(user.emailVerified
      ){
        dispatch(userLoginInfo(user));
        localStorage.setItem('userLoginInfo',JSON.stringify((user)))
        setVerify(true)
      }
  })
  return (
    <div>
      {
        verify ?
        <div className='flex bg-[#325983] h-screen w-full'>
      <div className='w-1/5 text-center mt-4 '>
        <Serch></Serch>
        <Userlist></Userlist>
        <Group></Group>
       
      </div>
      <div className='w-3/5 text-center mt-4'>
        <Navbar></Navbar>
        <Profile></Profile>
        <Post></Post>
     
      </div>
      <div className='w-1/5 mt-4 text-center'>
        <Logout></Logout>
        <Shortcut></Shortcut>
        <Cominity></Cominity>
        <Flowpage></Flowpage>
      </div>

    </div>

    :
    <div className='flex justify-center bg-primary items-center w-full h-screen  '>
  <div>
  <p className='font-inter text-6xl  text-white text-[80px] flex '>  please verify Your Account <FaHandsPraying className='text-orange mt-4 ml-1' /></p>

<div className='cursor pointer bg-orange p-[20px] inline-block justify-center text-center  ml-[400px] mt-4 text-inter text-xl text-white font-bold '><Link to='/login'>Back To Login</Link></div>
  </div>
    
    </div>
      }
    </div>
  )
}

export default Home