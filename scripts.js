const password = document.querySelector("#password"),
  confirmPassword = document.querySelector("#confirm"),
  submitButton = document.querySelector("#submit-btn");

function checkPassword() {
  console.log("test");
  if (password.value != confirmPassword.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  checkPassword();
});
