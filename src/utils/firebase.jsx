// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq3vJ-DF8N-HBmOuoySmhSAMjI3sZeYA4",
  authDomain: "netflixgpt-2e0ca.firebaseapp.com",
  projectId: "netflixgpt-2e0ca",
  storageBucket: "netflixgpt-2e0ca.firebasestorage.app",
  messagingSenderId: "910405540884",
  appId: "1:910405540884:web:79ea4172f61c55cfe95b01",
  measurementId: "G-ZZD1KE35C4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
