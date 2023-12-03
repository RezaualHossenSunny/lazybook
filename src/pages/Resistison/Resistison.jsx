import React, { useState } from "react";
import regi from "../../assets/regi.jpg";
import { RiEyeOffFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Audio, ThreeDots } from  'react-loader-spinner';
import { getDatabase, ref, set } from "firebase/database";
const Resistison = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate=useNavigate();
const[loading,setLoding]=useState(false);
  const [Email, setEmail] = useState("");
  const [fullname, setfullname] = useState("");
  const [Password, setpassword] = useState("");

  const [emailler, setEmailer] = useState("");
  const [fullnameer, setfullnameer] = useState("");
  const [passworder, setpassworder] = useState("");
  const [passwordShow, setpasswordShow] = useState(false);
  const [sucess, setSucess] = useState("");
  const handleemail = (e) => {
    setEmail(e.target.value);
    setEmailer("");
  };
  const handlefullname = (e) => {
    setfullname(e.target.value);
    setfullnameer("");
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
    setpassworder("");
  };
  const handleSubmit = () => {
    if (!Email) {
      setEmailer("pleasse enter your email");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Email)) {
        setEmailer("pleasse enter your valid email");
      }
    }
    if (!fullname) {
      setfullnameer("pleasse enter your fullname");
    }
    if (!Password) {
      setpassworder("pleasse enter your password");
    } else {
      if (!/^(?=.*[0-6])/.test(Password)) {
        setpassworder("pleasse enter your 6  digit password");
      }
    }
    if (
      Email &&
      fullname &&
      Password &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Email)
    ) {
      setLoding(true)
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName:fullname,
            photoURL: "./src/assets/profile.png"
          }).then(() => {
            toast.success("registion done verify your email");
            console.log('userHome',user);
            setEmail("");
            setfullname("");
            setpassword("");
            sendEmailVerification(auth.currentUser);
            setLoding(true);
            setTimeout(() => {
              navigate('/login')
            }, 3000);
          }).then(()=>{
            // console.log('userREgi',);
            set(ref(db, 'users/' +user.user.uid), {
              username: user.user.displayName,
              email: user.user.email,
             
            });
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
          
          
          
        })
    
    }
  };
  return (
    <div className="flex">
      <div className=" w-2/4 flex justify-end mr-[69px] mt-56">
        <div>
          <h3 className="font-inter font-bold text-6xl text-primary">
            Welcome To <span className="text-orange"> LazyBook</span>
          </h3>
          <h3 className="font-inter font-bold text-3xl text-[#555555] mt-5">
            Get started with easily register{" "}
          </h3>
          <ToastContainer position="top-left" theme="dark"/>
        
         

          <div className="mt-5">
            <p className="font-inter font-bold text-2xl text-primary">Email</p>
            <input
              onChange={handleemail}
              value={Email}
              className="py-4 px-1 w-[452px] mt-1 rounded border border-[#D3D3D3] font-inter font-bold  focus: outline-none"
              type="email"
              placeholder="Enter your mail"
            ></input>
            <p className="font-bold text-red-700">{emailler}</p>
          </div>
          <div className="mt-5">
            <p className="font-inter font-bold text-2xl text-primary">
              Full Name
            </p>
            <input
              onChange={handlefullname}
              value={fullname}
              className="py-4 px-1 w-[452px] mt-1 rounded border border-[#D3D3D3] font-inter font-bold  focus: outline-none"
              type="text"
              placeholder="Enter your Full Name"
            ></input>
            <p className="font-bold text-red-700">{fullnameer}</p>
          </div>
          <div className="mt-5 relative ">
            <p className="font-inter font-bold text-2xl text-primary">
              Password
            </p>
            <input
              onChange={handlepassword}
              value={Password}
              className="py-4 px-1 w-[452px] mt-1 rounded border border-[#D3D3D3] font-inter font-bold  focus: outline-none"
              type={passwordShow ? "text" : "password"}
              placeholder="Enter your Password"
            ></input>
            {passwordShow ? (
              <IoMdEye
                onClick={() => setpasswordShow(!passwordShow)}
                className="absolute top-[60px] right-0 w-[452px]"
              />
            ) : (
              <RiEyeOffFill
                onClick={() => setpasswordShow(!passwordShow)}
                className="absolute top-[60px] right-0 w-[452px]"
              />
            )}

            <p className="font-bold text-red-700">{passworder}</p>
          </div>
          <div className="mt-3">
          {
            loading ?
            <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />:
   <p
              onClick={handleSubmit}
              className="font-inter text-2xl bg-primary text-white text-center w-[452px] py-3.5 rounded-[86px] cursor-pointer "
            >
              Sign Up
            </p>
          }

          

            <h5 className="mt-3 text-center w-[452px] font-inter text-[#7A7A7A] text-base font-normal">
              Dont’t have an account?{" "}
              <Link to='/login' className="font-bold text-1xl font-inter text-[#f1a257] ">
                Sign In
              </Link>
            </h5>
          </div>
        </div>
      </div>
      <div className=" w-2/4">
        <img className="w-full h-screen object-cover" src={regi}></img>
      </div>
    </div>
  );
};

export default Resistison;
