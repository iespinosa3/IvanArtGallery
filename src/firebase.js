// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3AQVv0F9ZLYt9YRq8i6jGgPrHouWGoXo",
  authDomain: "ivan-gallery-3aa63.firebaseapp.com",
  projectId: "ivan-gallery-3aa63",
  storageBucket: "ivan-gallery-3aa63.appspot.com",
  messagingSenderId: "550734588913",
  appId: "1:550734588913:web:59a3e52a128cba40547250",
  measurementId: "G-62Z9VY9HJY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

console.log(db);
