// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_4iy7LN5hPifEN8oejJuNxUtjzeDcp64",
  authDomain: "genius-car-services-730f3.firebaseapp.com",
  projectId: "genius-car-services-730f3",
  storageBucket: "genius-car-services-730f3.appspot.com",
  messagingSenderId: "189653033575",
  appId: "1:189653033575:web:adfcb255bda0a9b60aaac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;