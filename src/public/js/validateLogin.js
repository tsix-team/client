const showPassword = document.getElementById("showPassword");
const showConfirmPassword = document.getElementById("showConfirmPassword");
const emailInput = document.forms["loginForm"]["email"];
const passwordInput = document.forms["loginForm"]["password"];

const validateLoginForm = () => {
  let email = emailInput.value;
  let password = passwordInput.value;
  let isValid = true;

  if (email === "" || password === "") {
    if (email === "") {
      displayErrorMessage("Vui lòng nhập email", "emailError");
    } else {
      clearErrorMessage("emailError");
    }

    if (password === "") {
      displayErrorMessage("Vui lòng nhập mật khẩu", "passwordError");
    } else {
      clearErrorMessage("passwordError");
    }

    isValid = false;
  } else {
    clearErrorMessage("emailError");
    clearErrorMessage("passwordError");

    if (!isValidEmail(email)) {
      displayErrorMessage("Email không đúng định dạng", "emailError");
      isValid = false;
    }

    if (password.length < 1) {
      displayErrorMessage("Mật khẩu phải có ít nhất 1 ký tự", "passwordError");
      isValid = false;
    }
  }

  return isValid;
};

const isValidEmail = (email) => {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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

showPassword.addEventListener("click", () => {
  togglePasswordVisibility(passwordInput);
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
