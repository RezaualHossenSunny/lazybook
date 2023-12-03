import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/Userslice';
const Logout = () => {
const auth = getAuth();
const navigate =useNavigate();
const dispatch =useDispatch();

  const handleLogout =()=>{
    signOut(auth).then(() => {
      dispatch(userLoginInfo(null));
      localStorage.removeItem('userLoginInfo')
      navigate('/login')
    }).catch((error) => {
      console.log(error.code);
    });
  }
  return (
    <div onClick={handleLogout} className='p-3' >
        <p  className='w-[200px]  border-2 py-3 text-1xl font-bold text-white bg-orange rounded-lg cursor-pointer text-center'>Logout</p>
    </div>
  )
}

export default Logout