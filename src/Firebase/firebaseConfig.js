// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJarndlee8f8xDcoELrXPvUo4ftJBOH8M",
  authDomain: "chatapp-example-302db.firebaseapp.com",
  projectId: "chatapp-example-302db",
  storageBucket: "chatapp-example-302db.appspot.com",
  messagingSenderId: "535530506589",
  appId: "1:535530506589:web:39420326b679b6650500b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
