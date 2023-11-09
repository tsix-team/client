const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const showPassword = document.getElementById("showPassword");
const showConfirmPassword = document.getElementById("showConfirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("Error");
  inputControl.classList.remove("Success");
};

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("Success");
  inputControl.classList.remove("Error");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  const regexMail = (email) => {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{6,}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  if (usernameValue === "") {
    setError(username, "Vui lòng nhập họ và tên");
  } else if (usernameValue.length < 6) {
    setError(username, "Vui lòng nhập trên 6 kí tự");
  } else if (usernameValue.length > 25) {
    setError(username, "Vui lòng nhập dưới 25 kí");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email không được để trống");
  } else if (regexMail(emailValue)) {
    setError(email, "Email không đúng định dạng");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Vui lòng nhập password");
  } else if (passwordValue.length < 6) {
    setError(password, "Password phải trên 6 ký tự");
  } else if (passwordValue.length > 20) {
    setError(password, "Password phải dưới 20 ký tự");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Vui lòng nhập password");
  } else if (confirmPasswordValue.length < 6) {
    setError(confirmPassword, "Password phải trên 6 ký tự");
  } else if (confirmPasswordValue.length > 20) {
    setError(confirmPassword, "Password phải dưới 20 ký tự");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Password không trùng khớp");
  } else {
    setSuccess(confirmPassword);
  }
};

showPassword.addEventListener("click", () => {
  password.type = "text";

  setTimeout(() => {
    password.type = "password";
  }, 1000);
});

showConfirmPassword.addEventListener("click", () => {
  confirmPassword.type = "text";

  setTimeout(() => {
    confirmPassword.type = "password";
  }, 1000);
});
