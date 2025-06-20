// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04hngUg0RT4g5XqC1xVn3KvH6vrRMypE",
  authDomain: "pharmastore-74e4a.firebaseapp.com",
  projectId: "pharmastore-74e4a",
  storageBucket: "pharmastore-74e4a.firebasestorage.app",
  messagingSenderId: "873528267409",
  appId: "1:873528267409:web:ee4a2e6682cf9b49986530",
  measurementId: "G-X8P6W7EKPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);