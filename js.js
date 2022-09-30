const input = document.querySelector("input");
const button = document.querySelector(".submit");
const invalid = document.querySelector(".invalid");
const form = document.querySelector("form");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerBtn = document.querySelector("#humburger-btn");
const closeBtn = document.querySelector("#close-btn");

//hamburger menu control

// opening hamburger menu
hamburgerBtn.addEventListener("click", (e) => {
  hamburgerMenu.classList.remove("hidden");
  hamburgerMenu.classList.add("animation");
  hamburgerBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
});

// closing hamburger menu

closeBtn.addEventListener("click", (e) => {
  hamburgerMenu.classList.add("hidden");
  hamburgerBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
});

// email validation
form.addEventListener("submit", (e) => {
  if (input.validity.typeMismatch || input.value == "") {
    e.preventDefault();
    invalid.classList.remove("opacity-0");
    input.classList.add("your-class");
    input.placeholder = "johnmadden/mail";
    input.style.outlineColor = "hsl(12, 88%, 59%)";
  }
});
function onInput() {
  if (input.validity.typeMismatch || input.value == "") {
    invalid.classList.remove("opacity-0");
    input.classList.add("your-class");
    input.placeholder = "johnmadden/mail";
    input.style.outlineColor = "hsl(12, 88%, 59%)";
  } else if (input.value.length >= 1) {
    input.placeholder = "johnmadden/mail";
    input.style.outlineColor = "green";
    invalid.classList.remove("your-class");
    invalid.classList.add("opacity-0");
  }
}
