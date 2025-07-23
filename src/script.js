const logInBtn = document.querySelector(".logInBtn");
const loginDialog = document.querySelector(".dark-bg");
const closeBtn = document.querySelector(".close");
const logInButton = document.querySelector(".logIn-btn");
const wrongAlert = document.querySelector(".wrong");

// Open login modal
logInBtn.addEventListener("click", () => {
  loginDialog.style.display = "flex";
});

// Close login modal
closeBtn.addEventListener("click", () => {
  loginDialog.style.display = "none";
});
