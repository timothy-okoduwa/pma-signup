// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBojEsyTICHJcPLxZLkGcr8_AU_B0eBboE",
  authDomain: "proj-mann.firebaseapp.com",
  databaseURL: "https://proj-mann-default-rtdb.firebaseio.com",
  projectId: "proj-mann",
  storageBucket: "proj-mann.appspot.com",
  messagingSenderId: "13212503941",
  appId: "1:13212503941:web:7b77c8d5ea81646286feec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
