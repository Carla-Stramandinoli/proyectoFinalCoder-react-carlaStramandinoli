import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
  authDomain: "ecomerce-coder-69571.firebaseapp.com",
  projectId: "ecomerce-coder-69571",
  storageBucket: "ecomerce-coder-69571.appspot.com",
  messagingSenderId: "540559076617",
  appId: "1:540559076617:web:f2aef25cc84539de7537d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app)
