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

/* === variables === */
const logInBtn = document.querySelector(".logIn-btn");
const signOutBtn = document.getElementById("sign-out-btn");

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

/* === sign out function === */
function authSignOut() {
  signOut(auth)
    .then(() => {
      window.location.href = "/index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

/* === login button press === */
document.addEventListener("DOMContentLoaded", () => {
  const logInBtn = document.querySelector(".logIn-btn");
  const signOutBtn = document.getElementById("sign-out-btn");

  if (logInBtn) {
    logInBtn.addEventListener("click", authSignInWithEmail);
  }

  if (signOutBtn) {
    signOutBtn.addEventListener("click", authSignOut);
  }
});
