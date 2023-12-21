const showPassword = document.getElementById("showPassword");
const showConfirmPassword = document.getElementById("showConfirmPassword");
const registerForm = document.forms["registerForm"];
const usernameInput = registerForm["username"];
const emailInput = registerForm["email"];
const passwordInput = registerForm["password"];
const confirmPasswordInput = registerForm["confirmPassword"];

const validateRegisterForm = () => {
  clearErrorMessages();

  let username = usernameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  let isValid = true;

  if (isEmpty(username)) {
    displayErrorMessage("Vui lòng nhập tên của bạn", "usernameError");
    isValid = false;
  } else if (username.length < 4) {
    displayErrorMessage("Họ tên của bạn phải trên 4 kí tự", "usernameError");
    isValid = false;
  }

  if (isEmpty(email)) {
    displayErrorMessage("Vui lòng nhập email", "emailError");
    isValid = false;
  } else if (!isValidEmail(email)) {
    displayErrorMessage("Email không đúng định dạng", "emailError");
    isValid = false;
  }

  if (isEmpty(password)) {
    displayErrorMessage("Vui lòng nhập mật khẩu", "passwordError");
    isValid = false;
  } else if (password.length < 6) {
    displayErrorMessage("Mật khẩu phải có ít nhất 6 ký tự", "passwordError");
    isValid = false;
  }

  if (isEmpty(confirmPassword)) {
    displayErrorMessage("Vui lòng xác nhận mật khẩu", "confirmPasswordError");
    isValid = false;
  } else if (confirmPassword !== password) {
    displayErrorMessage("Mật khẩu xác nhận không khớp", "confirmPasswordError");
    isValid = false;
  }

  return isValid;
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const displayErrorMessage = (message, elementId) => {
  let errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
};

const clearErrorMessage = (elementId) => {
  let errorElement = document.getElementById(elementId);
  errorElement.textContent = "";
};

const clearErrorMessages = () => {
  clearErrorMessage("usernameError");
  clearErrorMessage("emailError");
  clearErrorMessage("passwordError");
  clearErrorMessage("confirmPasswordError");
};

const isEmpty = (value) => {
  return value.trim() === "";
};

showPassword.addEventListener("click", () => {
  togglePasswordVisibility(passwordInput);
});

showConfirmPassword.addEventListener("click", () => {
  togglePasswordVisibility(confirmPasswordInput);
});

passwordInput.addEventListener("input", () => {
  clearErrorMessage("passwordError");
});

emailInput.addEventListener("blur", () => {
  if (!isValidEmail(emailInput.value)) {
    displayErrorMessage("Email không đúng định dạng", "emailError");
  } else {
    clearErrorMessage("emailError");
  }
});

emailInput.addEventListener("input", () => {
  clearErrorMessage("emailError");
});

const togglePasswordVisibility = (inputElement) => {
  inputElement.type = inputElement.type === "password" ? "text" : "password";

  setTimeout(() => {
    inputElement.type = "password";
  }, 800);
};
