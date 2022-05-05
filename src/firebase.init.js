// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD4CJsPWNj2U6b4w3u45VpDjohiRLJR5s",
  authDomain: "genius-car-65-3.firebaseapp.com",
  projectId: "genius-car-65-3",
  storageBucket: "genius-car-65-3.appspot.com",
  messagingSenderId: "981775178452",
  appId: "1:981775178452:web:6863bbe022e58afdd13941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
