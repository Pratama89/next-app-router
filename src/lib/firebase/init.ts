// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwj0NTIrcpSss1UnWVSRknw1xuCq4GJ50",
  authDomain: "next-app-route.firebaseapp.com",
  projectId: "next-app-route",
  storageBucket: "next-app-route.appspot.com",
  messagingSenderId: "559248355568",
  appId: "1:559248355568:web:5d3e1d517eac56b4669235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app