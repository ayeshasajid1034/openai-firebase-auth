// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDK8XvIQhnGhSwaKhYw9-NhTUM6UVZFAA",
  authDomain: "openai-firebase-auth.firebaseapp.com",
  projectId: "openai-firebase-auth",
  storageBucket: "openai-firebase-auth.firebasestorage.app",
  messagingSenderId: "866148305220",
  appId: "1:866148305220:web:5d6755dbdc4a67a7586f11",
  measurementId: "G-YTZJLY692V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);