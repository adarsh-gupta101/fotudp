// import React, { useRef, useState } from "react";
// import image from "../logincon"

// // import {
// //   FirebaseRecaptchaBanner,
// //   FirebaseRecaptchaVerifierModal,
// // } from "expo-firebase-recaptcha";
// import firebase from "firebase/app";
// import axios from "axios";

// // import { useNavigation } from "@react-navigation/core";
// // import { ScrollView } from "react-native-gesture-handler";

// const SignUp = () => {
//   const [Otp, setOtp] = useState();
//   const [Name, setName] = useState();
// //   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const [Username, setUsername] = useState();
//   const [birthdaywish, setbrthdaywish] = useState();
//   var [Mobile, setMobile] = useState();
//   const [verificationId, setVerificationId] = useState(null);
//   const recaptchaVerifier = useRef(null);
//   const attemptInvisibleVerification = false;
//   var [isregUser, setisregUser] = useState();
//   const [otpsucceded, setotpSuceeded] = useState(false);
//   const [isUsercreated, setisuserCreated] = useState(false);
// //   const windowHeight = Dimensions.get("window").height;
// //   const windowWidth = Dimensions.get("window").width;
// //   const navigation = useNavigation();
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const userSearching = async () => {
//     // var save = async function (key, value) {
//     //   await SecureStore.setItemAsync(key, value);
//     // };

//     // async function getValueFor(key) {
//     //   let result = await SecureStore.getItemAsync(key);
//     //   if (result) {
//     //     alert("🔐 Here's your value 🔐 \n" + result);
//     //   } else {
//     //     alert("No values stored under that key.");
//     //   }
//     // }

//     const number = Mobile;
//     await axios
//       .get(`https://qwertyuiqwertyui.herokuapp.com/allusers/${number}`)
//       .then((res) => {
//         setisregUser(res.data);
//         console.log(res.data);
//         // })
//         // .then(() => {

//         if (isregUser?.length == 0) {
//           //getValueFor("mobileNumber");
//           alert("jojo");
//           sendVerification;
//         } else {
//           alert(
//             "If you are a already registered User Kindly Login or Else click Send OTP again"
//           );
//         }
//       });
//     console.log(isregUser);
//   };

//   const firebaseConfig = firebase.apps.length
//     ? firebase.app().options
//     : undefined;

//   const [message, showMessage] = React.useState(
//     !firebaseConfig || Platform.OS === "web"
//       ? {
//           text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
//         }
//       : undefined
//   );

//   const sendVerification = async () => {
//     console.log("herfe");
//     try {
//       const phoneProvider = new firebase.auth.PhoneAuthProvider();
//       const verificationId = await phoneProvider.verifyPhoneNumber(
//         `+91${Mobile}`,
//         recaptchaVerifier.current
//       );
//       console.log(verificationId);
//       setVerificationId(verificationId);
//       showMessage({
//         text: `Verification code has been sent to your phone to ${Mobile}.`,
//       });
//       navigation.navigate("SignUpotp", {
//         mobileNumber: Mobile,
//         userName: Username,
//         namofuser: Name,
//         Id: verificationId,
//       });
//     } catch (err) {
//       showMessage({ text: `Error: ${err.message}`, color: "red" });
//     }
//   };

//   const NewUser = async () => {
//     if (
//       Username?.length > 3 &&
//       Name?.length > 3 &&
//       Mobile &&
//       Otp &&
//       otpsucceded
//     ) {
//       axios
//         .post("https://qwertyuiqwertyui.herokuapp.com/signup/", {
//           userName: Username,
//           name: Name,
//           mobileNumber: Mobile,
//           birthDay: birthdaywish,
//         })
//         .then((res) => {
//           console.log(res);
//           alert(res);

//           if (res.data) {
//             //    setotpSuceeded(true)
//             SecureStore.setItemAsync("MobileNumber", Mobile);

//             navigation.navigate("HomeScreen");
//           }
//         })
//         .catch((err) => {
//           alert(err);
//         });
//     }

//     //  return alert("Please Enter all fields....", otpsucceded);
//   };
//   const handleConfirm = (date) => {
//     setbrthdaywish(String(date));
//     alert(String(date));
//   };

//   const OtpBypass = async () => {
//     const credential = firebase.auth.PhoneAuthProvider.credential(
//       verificationId,
//       Otp
//     );
//     await firebase
//       .auth()
//       .signInWithCredential(credential)
//       .then(() => {
//         setotpSuceeded(true);
//         showMessage({ text: "Phone authentication successful 👍" });
//       })
//       .catch((err) => {
//         showMessage({ text: `Error: ${err.message}`, color: "red" });
//       });
//   };

//   return (

//     <KeyboardAvoidingView>
//       <FirebaseRecaptchaVerifierModal
//         ref={recaptchaVerifier}
//         firebaseConfig={firebaseConfig}
//         attemptInvisibleVerification={attemptInvisibleVerification}
//       />
//       <ScrollView style={tw`relative`}>
//         <Image
//           source={require("../../assets/Staticassets/signcon.png")}
//           style={tw`w-full`}
//         />

//         <TextInput
//           onChangeText={setName}
//           value={Name}
//           placeholder='Name'
//           placeholderTextColor='#FFF'
//           style={[
//             tw`rounded-xl text-white h-12 w-72 m-auto absolute 	text-center rounded-3xl	 	`,
//             { top: "40%", left: "10%", borderColor: "white", borderWidth: 1 },
//             styles.newInput,
//           ]}
//         />
//         <TextInput
//           onChangeText={setUsername}
//           value={Username}
//           placeholder='UserName'
//           placeholderTextColor='#FFF'
//           style={[
//             tw`rounded-xl  text-white h-12 w-72 m-auto absolute 	text-center rounded-3xl	 	`,
//             { top: "50%", left: "10%", borderColor: "white", borderWidth: 1 },
//             styles.newInput,
//           ]}
//         />
//         <TextInput
//           onChangeText={setbrthdaywish}
//           value={birthdaywish}
//           placeholder='14-9-2021'
//           placeholderTextColor='#FFF'
//           style={[
//             tw`rounded-xl text-white h-12 w-72 m-auto absolute 	text-center rounded-3xl	 	`,
//             { top: "60%", left: "10%", borderColor: "white", borderWidth: 1 },
//             styles.newInput,
//           ]}
//         />
//         <TextInput
//           onChangeText={setMobile}
//           value={Mobile}
//           placeholder='9876543210'
//           placeholderTextColor='#FFF'
//           keyboardType='numeric'
//           style={[
//             tw`rounded-xl text-white h-12 w-72 m-auto absolute 	text-center rounded-3xl	 	`,
//             { top: "70%", left: "10%", borderColor: "white", borderWidth: 1 },
//             styles.newInput,
//           ]}
//         />

//         <TouchableOpacity
//           style={[
//             tw`absolute p-2 rounded-xl`,
//             {
//               top: windowHeight / 1.5,
//               backgroundColor: "#3CB1FF",
//               width: windowWidth / 1.2,
//             },

//             { left: "5%", top: "80%", width: windowWidth / 1.1 },
//           ]}
//           onPress={
//             userSearching
//             //   navigation.navigate("SignUpotp", {
//             //     mobileNumber: Mobile,
//             //     userName: Username,
//             //     namofuser: Name,
//             //     Id: verificationId,
//             //   })
//             // ;
//           }>
//           <Text style={tw`text-white text-center p-2  font-bold`}>Log in</Text>
//         </TouchableOpacity>

//         {/* <Text
//           style={[
//             tw`absolute text-white text-center  w-full`,
//             { left: "0%", top: "90%" },
//           ]}>
//           Don't have an account?
//           <TouchableOpacity
//             style={tw`text-center`}
//             onPress={() => navigation.navigate("SignUpotp")}>
//             <Text style={tw`text-blue-300`}>Sign up</Text>
//           </TouchableOpacity> */}
//         {/* </Text> */}
//       </ScrollView>
//       {message ? (
//         <TouchableOpacity
//           style={[
//             StyleSheet.absoluteFill,
//             { backgroundColor: 0xffffffee, justifyContent: "center" },
//           ]}
//           onPress={() => showMessage(undefined)}>
//           <Text
//             style={{
//               color: message.color || "blue",
//               fontSize: 17,
//               textAlign: "center",
//               margin: 20,
//             }}>
//             {message.text}
//           </Text>
//         </TouchableOpacity>
//       ) : undefined}
//     </KeyboardAvoidingView>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   container: { backgroundColor: "#272C30" },
//   textInput22: {
//     backgroundColor: "#3B444A",
//     color: "white",
//   },
//   Getin: {
//     color: "#C6961B",
//   },
//   newInput: {
//     // transform:`translate("-50%", "-50%")`
//   },

// });

import React, { useState } from "react";
import image from "../logincon.png";
import { adduser, names, username, vid } from "../slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import firebase from "firebase";
function Signup() {
  let navigate = useNavigate();
  const [isregUser, setisregUser] = useState();
  const userSearching = async () => {
    // var save = async function (key, value) {
    //   await SecureStore.setItemAsync(key, value);
    // };

    // async function getValueFor(key) {
    //   let result = await SecureStore.getItemAsync(key);
    //   if (result) {
    //     alert("🔐 Here's your value 🔐 \n" + result);
    //   } else {
    //     alert("No values stored under that key.");
    //   }
    // }
    const signin = () => {
      if (mobile === "" || mobile.length < 10) return;

      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      auth
        .signInWithPhoneNumber(`+91${mobile}`, verify)
        .then((result) => {
          dispatch(vid(result.verificationId));
          
          console.log(result.verificationId);
          alert("code sent");
          navigate("/otps", { opt: result });
          // setshow(true);
        })
        .catch((err) => {
          alert(err);
          window.location.reload();
        });
    };

    const number = mobile;
    await axios
      .get(`https://qwertyuiqwertyui.herokuapp.com/allusers/${number}`)
      .then((res) => {
        setisregUser(res.data);
        console.log(res.data);
        // })
        // .then(() => {

        if (isregUser?.length == 0) {
          //getValueFor("mobileNumber");
          // alert("jojo");
          signin();
        } else {
          alert(
            "If you are a already registered User Kindly Login or Else click Login again"
          );
        }
      });
    console.log(isregUser);
  };

  const [name, setname] = useState();
  const [userName, setuserName] = useState();
  const [mobile, setmobile] = useState();
  const dispatch = useDispatch();

  function s1(e) {
    setname(e.target.value)
    
  }
  function s2(e) {
    setuserName(e.target.value)
    
  }

  function s3(e) {
    setmobile(e.target.value)
    
  }
  return (
    <div className='relative' style={{height:"100vh"}}>
                                <div id="recaptcha-container"></div>

      <img src={image} />

      <div className='absolute' style={{ top: "50%", left: "5%" }}>
        <input
          value={name}
          placeholder='name'
          onChange={e=>s1(e)}
          className='w-64 p-1 m-auto my-2 rounded'
          style={{ width: "90vw" }}></input>

        <input
          value={userName}
          placeholder='username'
          onChange={e=>s2(e)}
          className='w-64 p-1 m-auto my-2 rounded'
          style={{ width: "90vw" }}></input>

        <input
          mobile={name}
          type='number'
          placeholder='mobile'
          onChange={e=>s3(e)}
          className='w-64 p-1 m-auto my-2 rounded'
          style={{ width: "90vw" }}></input>
      </div>

      <button
        className='absolute p-2 rounded-xl'
        style={{
          top: 100 / 1.5,
          backgroundColor: "#3CB1FF",
          width: 100 / 1.2,

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
          dispatch(adduser(mobile));
          dispatch(username(userName))
          dispatch(names(name))
          userSearching(); // navigate("/auth")
          //alert("hi")
        }}>
        <a>
          <p
            className='text-white text-center p-2  font-bold'
            style={{ textAlign: "center" }}>
            Log in
          </p>
        </a>
      </button>
    </div>
  );
}

export default Signup;
