// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "file-manager-6fa20.firebaseapp.com",
  projectId: "file-manager-6fa20",
  storageBucket: "file-manager-6fa20.appspot.com",
  messagingSenderId: "898124418435",
  appId: "1:898124418435:web:4a62f65f4cef1d2dfa3ab6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
