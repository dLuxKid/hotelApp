// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBqHegKh2vnVIbjh-LSvMKVq402L3R0K0",
  authDomain: "hotelapp-12055.firebaseapp.com",
  projectId: "hotelapp-12055",
  storageBucket: "hotelapp-12055.appspot.com",
  messagingSenderId: "78329181626",
  appId: "1:78329181626:web:4f808169f894179bec1983",
  measurementId: "G-8L497B2MEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;