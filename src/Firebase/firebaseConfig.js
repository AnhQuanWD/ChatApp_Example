// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZK24USSuOfcMcRZGBX4-Qkr5UpjAtas",
  authDomain: "new-chat-app-3ef18.firebaseapp.com",
  projectId: "new-chat-app-3ef18",
  storageBucket: "new-chat-app-3ef18.appspot.com",
  messagingSenderId: "130020961829",
  appId: "1:130020961829:web:58bacc53ad29ffd25319cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
