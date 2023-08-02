// Getting actions buttons

const toggleBtn = document.querySelector(".toggle__bar");
const closeBtn = document.querySelector(".nav__close-btn");
const navbar = document.querySelector(".nav__overlay");

toggleBtn.addEventListener("click", () => {
  navbar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navbar.style.display = "none";
});
