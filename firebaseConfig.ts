// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import 'dotenv/config';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
//   };

const firebaseConfig = {

    apiKey: "AIzaSyBJtOB5NitlIwB55155Jsu5E8lFMS8JN-U",
  
    authDomain: "autolux-1abab.firebaseapp.com",
  
    projectId: "autolux-1abab",
  
    storageBucket: "autolux-1abab.appspot.com",
  
    messagingSenderId: "187361759761",
  
    appId: "1:187361759761:web:c9038511df24f99592d7b0",
  
    measurementId: "G-NM6QW5DJPW"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };

