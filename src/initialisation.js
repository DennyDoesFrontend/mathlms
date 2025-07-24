/* === import statements === */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

/* === config object === */
const firebaseConfig = {
  apiKey: "AIzaSyAWB-CXBkBwq1bkj_m53__lyeW-89xFKo4",
  authDomain: "mathlms.firebaseapp.com",
  projectId: "mathlms",
  storageBucket: "mathlms.firebasestorage.app",
};

/* === Initialise Project === */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // initialise firebase authentication
