/* === import statements === */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

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

/* === sign out functionality === */
const signOutBtn = document.getElementById("sign-out");
signOutBtn.addEventListener("click", authSignOut);

// Navigation functionality
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all nav links
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    this.classList.add("active");

    // Get the page type
    const page = this.getAttribute("data-page");
    console.log("Navigating to:", page);
  });
});

// Action button functionality
document.querySelector(".action-button").addEventListener("click", function () {
  this.style.transform = "translateY(0px) scale(0.98)";
  setTimeout(() => {
    this.style.transform = "translateY(-1px) scale(1)";
  }, 100);

  console.log("Start Learning clicked");
});
