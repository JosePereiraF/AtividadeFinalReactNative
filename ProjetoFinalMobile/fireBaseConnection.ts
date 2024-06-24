// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1tFmIdaOdCjlRlPua0RDp8g6OjMacDpA",
  authDomain: "aula-7ff06.firebaseapp.com",
  projectId: "aula-7ff06",
  storageBucket: "aula-7ff06.appspot.com",
  messagingSenderId: "547375722214",
  appId: "1:547375722214:web:6e512e580040d5380bd527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};