// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8VdXqIoQGWtyGnoUNif4torQzylZRE6E",
  authDomain: "realtor-clone-react-ekam.firebaseapp.com",
  projectId: "realtor-clone-react-ekam",
  storageBucket: "realtor-clone-react-ekam.appspot.com",
  messagingSenderId: "952618247643",
  appId: "1:952618247643:web:fed1172565bd979c0973fe"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();