// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-f2da0.firebaseapp.com",
  projectId: "blog-f2da0",
  storageBucket: "blog-f2da0.appspot.com",
  messagingSenderId: "46354303890",
  appId: "1:46354303890:web:00e2aba105cf1dd9d04f4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);