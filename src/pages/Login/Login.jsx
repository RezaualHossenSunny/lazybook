import React, { useState } from 'react'
import regi from '../../assets/sinup.jpg'
import { RiEyeOffFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/Userslice';
import { Audio, Hearts } from  'react-loader-spinner'
const Login = () => {
    const auth = getAuth();
    const navigate=useNavigate();
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch()
     const[loding,setLoding]=useState(false);
    const[Email,setEmail]=useState('');
    const[Password,setpassword]=useState('');

    const [emailler,setEmailer]=useState('');
    const [passworder,setpassworder]=useState('');

    const [passwordShow,setpasswordShow]=useState(false);

    const handleemail =(e)=>{
        setEmail(e.target.value);
        setEmailer('')
    }
   
    const handlepassword  =(e)=>{
        setpassword(e.target.value);
        setpassworder('')
    }
    const handleSubmit=()=>{
        if(!Email){
            setEmailer('pleasse enter your email')
        }else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Email)){
                setEmailer('pleasse enter your valid email')
            }
        }
       
        if(!Password){
            setpassworder('pleasse enter your password')
        }else{
            if(!/^(?=.*[0-6])/.test(Password)){
                setpassworder('pleasse enter your 6  digit password')
            }
            if (
                Email&&
                Password &&
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Email)
              ) {
                setLoding(true)
                signInWithEmailAndPassword(auth, Email, Password)
                .then((user) => {
              console.log(user.user);
                 
               
                    toast.success('Login Sucessfully Done');
                    dispatch(userLoginInfo(user));
                    localStorage.setItem('userLoginInfo',JSON.stringify((user)))
                    setEmail("");
                    setpassword("");
                    setLoding(true)

                    setTimeout(() => {
                       navigate('/') 
                    }, 3000);
                })
                .catch((error) => {
                  const errorCode = error.code;
                if(errorCode.includes('auth/invalid-credential')){
                toast.warn('invalid email/password please enter valid email/password')
               
               }
                });
              
              }
    }
    }

const handleGoogle=()=>{
    signInWithPopup(auth, provider)
    .then(() => {
     setTimeout(() => {
        navigate('/home')
     }, 3000);
    }).catch((error) => {
    
      const errorCode = error.code;
    console.log(errorCode);
    });
  
}
  return (
    <div className='flex'>
        <div className=' w-2/4 flex justify-end mr-[69px] mt-56'>
          <div>
          <h3 className='font-inter font-bold text-5xl text-primary'>Login to your </h3>
          <h3 className='text-orange font-inter font-bold text-4xl mt-2 '> LazyBook</h3>
          <div onClick={handleGoogle} className=' w-[252px] py-3.5 rounded-sm py-4 px-1 flex border border-l-2 border-slate-100 mt-4 bg-slate-300'>
          <FcGoogle className='text-2xl' />
          <p  className='text-2xl font-semibold font-inter text-center text-primary cursor-pointer'>Login with Google</p>  

          </div>
          <ToastContainer position="top-left" theme="dark"/>
          <div className='mt-5'>
          <p  className='font-inter font-bold text-2xl text-primary'>Email</p>
          <input onChange={handleemail} value={Email} className='py-4 px-1 w-[452px] mt-1 rounded border-b border-[#D3D3D3] font-inter font-bold focus: outline-none' type='email' placeholder='Enter your mail'></input>
          <p className='font-bold text-red-700'>{emailler}</p>

          </div>
         
          <div className='mt-5 relative '>
          <p className='font-inter font-bold text-2xl text-primary'>Password</p>
          <input onChange={ handlepassword} value={Password} className='py-4 px-1 w-[452px] mt-1 rounded border-b border-[#D3D3D3] font-inter font-bold  focus: outline-none' type={passwordShow?'text':'password'} placeholder='Enter your Password'></input>
         {
            passwordShow ? <IoMdEye onClick={()=> setpasswordShow(!passwordShow)} className='absolute top-[60px] right-[-200px] w-[452px]' /> :
            <RiEyeOffFill onClick={()=> setpasswordShow(!passwordShow)} className='absolute top-[60px] right-[-200px] w-[452px]'/>

         }
          


          <p className='font-bold text-red-700'>{passworder}</p>

          </div>
          <div className='mt-3'>
          {
            loding ?
            <Hearts 
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
:
<p onClick={handleSubmit} className='font-inter text-2xl bg-primary text-white text-center w-[452px] py-3.5 rounded-[86px] cursor-pointer' >Login to Continue</p>
          }
            

             <h5 className='mt-3 text-center w-[452px] font-inter text-[#7A7A7A] text-base font-normal'>Dont’t have an account? <Link to='/resistion' className='font-bold text-1xl font-inter text-[#f1a257]'>Sign</Link></h5>

             
          </div>
          </div>
          
        
        </div>
        <div className=' w-2/4'>
          
                <img className='w-full h-screen object-cover' src={regi}></img>
            
        </div>
    </div>
  )
}

export default Login