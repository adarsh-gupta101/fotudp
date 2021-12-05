// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/storage";

import "firebase/auth"
// import { initializeApp } from "firebase/app";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCbNlI2y1nhqkjJrNeAxNB3sP2650LjDHE",
  authDomain: "fotpicdb.firebaseapp.com",
  databaseURL: "https://fotpicdb-default-rtdb.firebaseio.com",
  projectId: "fotpicdb",
  storageBucket: "fotpicdb.appspot.com",
  messagingSenderId: "1025406080852",
  appId: "1:1025406080852:web:3a374501fcdd4eed9a9ac1",
  measurementId: "G-DRS1L9JRZ7",
};

//const firebaseApp = firebase.initializeApp(firebaseAppConfig);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseApp);
} else {
  firebase.app(); // if already initialized, use that one
}

// const app = firebase.app();

const storage = firebase.storage();
const auth=firebase.auth()

export { firebase ,storage,auth};

/* 



{
    "project_info": {
      "project_number": "1025406080852",
      "project_id": "fotpicdb",
      "storage_bucket": "fotpicdb.appspot.com"
    },
    "client": [
      {
        "client_info": {
          "mobilesdk_app_id": "1:1025406080852:android:f1bb630856b728ac9a9ac1",
          "android_client_info": {
            "package_name": "com.adarsh.fot"
          }
        },
        "oauth_client": [
          {
            "client_id": "1025406080852-ss2ve1ppm72t2kcepn8gdnqdjrq1gmtb.apps.googleusercontent.com",
            "client_type": 3
          }
        ],
        "api_key": [
          {
            "current_key": "AIzaSyAe9GM2EU8V1guM1M3j2Y-MtoA2u-Jf47A"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": [
              {
                "client_id": "1025406080852-ss2ve1ppm72t2kcepn8gdnqdjrq1gmtb.apps.googleusercontent.com",
                "client_type": 3
              }
            ]
          }
        }
      }
    ],
    "configuration_version": "1"
  } */
