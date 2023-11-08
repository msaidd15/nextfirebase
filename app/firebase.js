// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZFrI3kyaCrsL4He3kkpZGCyBzKVHm_rU",
  authDomain: "tryintern-1ce90.firebaseapp.com",
  projectId: "tryintern-1ce90",
  storageBucket: "tryintern-1ce90.appspot.com",
  messagingSenderId: "121570146425",
  appId: "1:121570146425:web:5b9a32f505876273e33ca8",
  measurementId: "G-ZHR4MY6YEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);