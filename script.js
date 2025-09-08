
// Part 1: Event Handling

const showMsgBtn = document.getElementById("showMsgBtn");
const message = document.getElementById("message");

showMsgBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});

const showMsg2Btn = document.getElementById("showMsg2Btn");
const message2 = document.getElementById("message2");

showMsg2Btn.addEventListener("click", () => {
  message2.classList.toggle("hidden");
});



// Interactive Elements

// Light/Dark Mode
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

// Dropdown Menu
const dropBtn = document.getElementById("dropBtn");
const dropMenu = document.getElementById("dropMenu");

dropBtn.addEventListener("click", () => {
  dropMenu.classList.toggle("hidden");
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!e.target.matches("#dropdownBtn")) {
    if (!dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("hidden");
    }
  }
});

// Part 3: Form Validation
const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (basic regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully ✅");
    form.reset();
  }
});
