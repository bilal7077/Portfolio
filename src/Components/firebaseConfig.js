// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBthCs4sYNlENPvfIez72Ez2JUVhfGQcsM",
  authDomain: "contact-c46ad.firebaseapp.com",
  projectId: "contact-c46ad",
  storageBucket: "contact-c46ad.appspot.com",
  messagingSenderId: "1052677281881",
  appId: "1:1052677281881:web:83ebf17bda8682674d7948"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };