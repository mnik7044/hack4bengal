// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ViTlXY3Qjhwv9-8qQQXzezycObsdj9w",
  authDomain: "healify-ecc09.firebaseapp.com",
  projectId: "healify-ecc09",
  storageBucket: "healify-ecc09.appspot.com",
  messagingSenderId: "567107365240",
  appId: "1:567107365240:web:b023e6e985ed2e009b808d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();