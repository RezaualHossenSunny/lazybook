import React, { createRef, useState } from 'react'
import profile from '../../assets/profile.png';
import { FaUpload } from "react-icons/fa6";
import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { getAuth, updateProfile } from 'firebase/auth';
import { useSelector } from 'react-redux';
import cover from '../../assets/cover.jpg';
import { FaCamera } from "react-icons/fa";
const Profile = () => {
  const auth=getAuth();
  const storage = getStorage();
 
  const[uplodProfile,Setuplodprofile]=useState(false);
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();
  const [fullname, setfullname] = useState("");
const data=useSelector(state => state.userLoginInfo.userInfo);
console.log('dataHome' , data.photoURL);


  const handleImg =()=>{
    Setuplodprofile(true)
  }
 const handleProfilecancel =()=>{
  Setuplodprofile(false);
  setImage('');
  setCropData('');
 }
   const handleChangePorfile = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    console.log('filexx',files);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      
      const storageRef = ref(storage, auth.currentUser.uid);
      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, 'data_url').then((snapshot) => {
      console.log('Uploaded a data_url string!');
      getDownloadURL(storageRef).then((downloadURL) => {
        console.log('File available at', downloadURL);
        updateProfile(auth.currentUser, {
           photoURL:downloadURL,
        }).then(()=>{

          Setuplodprofile(false);
          setImage('');
          setCropData('');
         
        })
       
        
      });
      
});
    }
   
  };
  return (
    <div>
        <div className='w-[720px] h-[300px] bg-white ml-[230px] mt-4 relative '>
        <FaCamera className='text-orange text-3xl absolute bottom-0 right-0' />


        <div className='w-[150px] h-[150px]  absolute bottom-[-80px] left-1 ' >
       <div onClick={handleImg} className='relative group '>
       <img className='rounded-full border-4 border-white w-full h-full '  src={data.photoURL}></img>
      
        <div className='cursor-pointer w-full h-full rounded-full opacity-0 hover:bg-overlay hover:opacity-100 absolute top-0 left-0 flex justify-center items-center '>
        <FaUpload className='text-4xl text-white'/>
        </div>

        <div className='absolute left-[200px] font-serif top-[100px] font-bold text-white text-3xl text-center inline-block w-[400px]'> {data.displayName}</div>
        
       </div>

        </div>
        
        
        </div>
        
  {
    uplodProfile &&
    <div className='ml-[-410px] '>
       <div className=' h-screen w-full bg-primary absolute top-0 letf-0 flex justify-center items-center '>
       <div className='bg-white w-1/2 p-10 rounded'>
       <h2 className='font-inter font-bold text-3xl text-primary mt-4'>Upload Profile Picture </h2>
       <div className='w-28 h-28 ml-[400px] mt-2 rounded-full overflow-hidden '>
     {
      image ?
      <div
            className="img-preview h-full w-full rounded-full"
            // style={{ width: "100%", float: "left", height: "300px" }}
          />
          :
          <img className='rounded-full border-4 border-white  '  src={data.photoURL}></img>
     }
       
       </div>
      
       
       <input onChange={handleChangePorfile} className='mt-[30px]' type='file' />
    {
      image &&
      <Cropper
          className='mt-4'
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
    }
       <div className='mt-[30px]'>

<button onClick={getCropData} className='font-inter text-2xl bg-primary text-white text-center  p-5  cursor-pointer rounded-lg' >Upload</button>

  


<button onClick={handleProfilecancel} className='font-inter text-2xl bg-orange text-white text-center  p-5  rounded-lg cursor-pointer ml-[10px]' >Cancel</button>



       </div>

       </div>

</div>
       </div>

  }

      
        
    </div>
    
  )
}

export default Profile