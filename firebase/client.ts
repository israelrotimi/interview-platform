import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG8wCzOeDXIEDUGj20rUtluT_r5TGLI5Q", // Only works if it's placed here directly not in .env
  authDomain: "interviewprep-2c518.firebaseapp.com",
  projectId: "interviewprep-2c518",
  storageBucket: "interviewprep-2c518.firebasestorage.app",
  messagingSenderId: "139775316497",
  appId: "1:139775316497:web:9045985ef3ebc7a68057b0",
  measurementId: "G-82GZWB084F"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
