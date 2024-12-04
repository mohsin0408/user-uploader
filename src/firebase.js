// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE9_kuNWTJSp03PXCeoYCg3EI8Wqc_ZIU",
  authDomain: "image-app-373f3.firebaseapp.com",
  projectId: "image-app-373f3",
  storageBucket: "image-app-373f3.firebasestorage.app",
  messagingSenderId: "533542686796",
  appId: "1:533542686796:web:7b844fe16f591266a264e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}