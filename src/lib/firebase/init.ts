// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5t-ndWRWhrkQhJZECHzNdpfTKME0RztE",
  authDomain: "nextapp-pharmadent.firebaseapp.com",
  projectId: "nextapp-pharmadent",
  storageBucket: "nextapp-pharmadent.appspot.com",
  messagingSenderId: "374971009317",
  appId: "1:374971009317:web:4aff60f9f0cfdf5ec5f2cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app