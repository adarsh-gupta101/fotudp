import React, {  useState } from "react";

import firebase from "firebase/app";
import loginpng from "../LoginOTP.png";
// import OTPTextInput from "react-otp-input";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

// import OTPTextInput from "react-native-otp-textinput";
const Loginwithotp = () => {
    let navigate = useNavigate();

  //const user = useSelector((state) => state.user.value);
  const final = useSelector((state) => state.user.id);
  console.log(typeof final);
  let varx = final;

  const [Otp, setOtp] = useState("");
 
function handleOTP(e){
    setOtp(e.target.value)
}
  
 
  const [message, showMessage] = useState();
console.log(message)

  const ValidateOtp = () => {
    if (Otp === null || final === null) return;
    final
      .confirm(Otp)
      .then((result) => {
        // successale
        alert("nice");
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  

  return (
    <div className='relative' style={{ height: "100vh" }}>
      <img src={loginpng} className=' absolute ' />
      <p
        style={{ top: "55%" }}
        className='text-white text-2xl text-center font-bold'>
        Pass to Explore
      </p>
      .

      <input
        type='text'
        value={Otp}
        onChange={(e) => {
handleOTP(e)          
        }}
        style={{
          position: "absolute",
          top: "65%",
          left: "5%",
          width: "90vw",
          height: "10vw",
        }}></input>
      <button
        className='absolute p-2 rounded-xl'
        style={{
          top: 100 / 1.5,
          backgroundColor: "#3CB1FF",
          width: "100vw",

          left: "5%",
          top: "75%",
          width: "90vw",
        }}
        onClick={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              varx,
              Otp
            );
            await firebase.auth().signInWithCredential(credential);
            showMessage({ text: "Phone authentication successful 👍" });
            // save("MobileNumber", mobile);
            alert("success");          navigate("/fot")

        

            // navigation.navigate("HomeScreen");
          } catch (err) {
            showMessage({
              text: `Error: ${err.message} line167`,
              color: "red",
            });
            console.log(err);
          }

        }}>
        <p className='text-white text-center p-2  font-bold'>Log in</p>
      </button>

      <p
        className='
        absolute text-white text-center  w-full'
        style={{ left: "0%", top: "85%" }}>
        Don't have an account?
        <button
          className='text-center'
          //   onPress={() => navigation.navigate("SignUp")}
        >
          <p className='text-blue-300'>Sign up</p>
        </button>
      </p>

      {/* {message ? (
        <button
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}>
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}>
            {message.text}
          </Text>
        </button>
      ) : undefined} */}
    </div>
  );
};

export default Loginwithotp;

// const styles = StyleSheet.create({
//   containerStyle: { position: "absolute", top: "65%" },
//   inputStyles: { borderWidth: 1, color: "white" },
// });
