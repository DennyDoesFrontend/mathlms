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

/* === sign in function === */
function authSignInWithEmail() {
  const email = document.getElementById("emailAddress").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      window.location.href = "/src/pages/dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

/* === Sign in and Log out buttons */
const logInBtn = document.querySelector(".logIn-btn");

logInBtn.addEventListener("click", authSignInWithEmail);
