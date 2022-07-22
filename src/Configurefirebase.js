// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD29kznxMtoZueNdDGS8MXZVgS206SFY4U",
  authDomain: "react-firebase-auth-5c0f8.firebaseapp.com",
  projectId: "react-firebase-auth-5c0f8",
  storageBucket: "react-firebase-auth-5c0f8.appspot.com",
  messagingSenderId: "868930025392",
  appId: "1:868930025392:web:bbc9fd49d17fa2c2a24875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);