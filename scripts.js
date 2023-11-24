const firstName = document.querySelector("#first"),
  lastName = document.querySelector("#last"),
  email = document.querySelector("#email"),
  phoneNumber = document.querySelector("#phone"),
  password = document.querySelector("#password"),
  confirmPassword = document.querySelector("#confirm"),
  submitButton = document.querySelector("#submit-btn"),
  errorMessages = document.querySelectorAll(".error");

function checkPassword() {
  return password.value == confirmPassword.value;
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  checkPassword();
});

firstName.addEventListener("blur", () => {
  if (firstName.value == "") {
    errorMessages[0].textContent = "This is a required item";
    errorMessages[0].classList.remove("error-hidden");
  } else if (!errorMessages[0].classList.contains("error-hidden")) {
    errorMessages[0].classList.add("error-hidden");
  }
});

lastName.addEventListener("blur", () => {
  if (lastName.value == "") {
    errorMessages[1].textContent = "This is a required item";
    errorMessages[1].classList.remove("error-hidden");
  } else if (!errorMessages[1].classList.contains("error-hidden")) {
    errorMessages[1].classList.add("error-hidden");
  }
});

email.addEventListener("blur", () => {
  if (email.value == "") {
    errorMessages[2].textContent = "This is a required item";
    errorMessages[2].classList.remove("error-hidden");
  } else if (!errorMessages[2].classList.contains("error-hidden")) {
    errorMessages[2].classList.add("error-hidden");
  }
});

phoneNumber.addEventListener("blur", () => {
  if (phoneNumber.value == "") {
    errorMessages[3].textContent = "This is a required item";
    errorMessages[3].classList.remove("error-hidden");
  } //else if () {}
  else if (!errorMessages[3].classList.contains("error-hidden")) {
    errorMessages[3].classList.add("error-hidden");
  }
});

password.addEventListener("blur", () => {
  if (password.value.length < 8) {
    errorMessages[4].textContent = "Password must be at least 8 characters";
    errorMessages[4].classList.remove("error-hidden");
  } else if (confirmPassword.value != "" && !checkPassword()) {
    errorMessages[5].textContent = "Password and confirmation do not match";
    errorMessages[5].classList.remove("error-hidden");
  } else if (!errorMessages[4].classList.contains("error-hidden")) {
    errorMessages[4].classList.add("error-hidden");
  }
});

confirmPassword.addEventListener("blur", () => {
  if (confirmPassword.value.length < 8) {
    errorMessages[5].textContent = "Password must be at least 8 characters";
    errorMessages[5].classList.remove("error-hidden");
  } else if (!checkPassword()) {
    errorMessages[5].textContent = "Password and confirmation do not match";
    errorMessages[5].classList.remove("error-hidden");
  } else if (!errorMessages[5].classList.contains("error-hidden")) {
    errorMessages[5].classList.add("error-hidden");
  }
});
