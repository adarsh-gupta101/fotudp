import React, { useState } from "react";
import Image from "../logincon.png";
import {  useDispatch } from 'react-redux'
import { adduser, vid } from "../slice";
//import { getAuth, RecaptchaVerifier } from "firebase/auth";
import {auth,firebase} from "../firebase"
// import firebase from  "firebase";

import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const dispatch = useDispatch()

  console.log(firebase)
  // const[final,setfinal]=useState()
  const[isregUser,setisregUser]=useState()

  const signin = () => {
  
    if (mobile === "" || mobile.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.signInWithPhoneNumber(`+91${mobile}`, verify).then((result) => {
        dispatch(vid(result.verificationId));
        console.log(result.verificationId)
        alert("code sent")
        navigate("/auth",{opt:result})
        // setshow(true);
    })
        .catch((err) => {
            alert(err);
            window.location.reload()
        });
}


const userSearching = async () => {
  await axios
    .get(`https://qwertyuiqwertyui.herokuapp.com/allusers/${mobile}`)
    .then((res) => {
      setisregUser(res.data);
      //console.log(res.data);
    })
    .then(() => {
      if (isregUser?.length > 0) {
        signin();
      } else alert("Aww! I guess you are not having an account ... Please signUp else click login again");
    })
    .catch((err) => {
      //  alert(err);
    });
  // console.log("isregUser,", isregUser);
};

  const [mobile,setmobile]=useState("")
  let navigate = useNavigate();

  return (

    <div className='text-red relative'>
                          <div id="recaptcha-container"></div>

      <img alt=""
        src={Image}
        className=' shadow-inner-2xl'
        style={{ width: "100vh", height: "100vh" }}
      />
      <div
        className='absolute text-xl font-medium text-white '
        style={{ left: "5%", top: "60%", width: "90vw" }}>
        Enter your phone number
      </div>

      <input
        type='number'
        placeholder='MobileNumber'
        value={mobile}
        onChange={(e=>setmobile(e.target.value))}
        className='text-lg pl-2 absolute text-black h-12  border border-white rounded m-auto p-3'
        style={{ left: "5%", top: "65%", width: "90vw" }}></input>

      <button
        className='absolute p-2 rounded-xl'
        style={{
          backgroundColor: "#3CB1FF",

          left: "5%",
          top: "75%",
          width: "90vw",
        }}
        onClick={() => {
          // sendVerification()
          // navigation.navigate("Loginwithotp", {
          //   id: "verificationId",
          //   mobile: "mobileNumber",
          // });
          dispatch(adduser(mobile))
userSearching()          // navigate("/auth")
          //alert("hi")
        }}>
        <p
          className='text-white text-center p-2  font-bold'
          style={{ textAlign: "center" }}>
          Log in
        </p>
      </button>
      <span
        className='absolute text-white text-center  w-full'
        style={{ left: "0%", top: "85%" }}>
        Don't have an account?
        <span className='text-center' onClick={() => {navigate("/signin")}}>
          <p className='text-blue-300'>Sign up</p>
        </span>
      </span>
    </div>
  );
}

export default Login;
