// function Validator(options) {
//   var selectorRules = {};

//   function Validate(inputElement, rule) {
//     var errElement = inputElement.parentElement.querySelector(".form-message");
//     var errMessage = rule.test(inputElement.value);

//     var rules = selectorRules[rule.selector];

//     for (var i = 0; i < rules.length; i++) {
//       errMessage = rules[i](inputElement.value);
//       if (errMessage) break;
//     }
//     if (errMessage) {
//       errElement.innerText = errMessage;
//       errElement.style.color = "red";
//       inputElement.classList.add("invalid");
//     } else {
//       errElement.innerText = "";
//       inputElement.classList.remove("invalid");
//     }
//     return !errMessage;
//   }
//   var formElement = document.querySelector(options.form);

//   if (formElement) {
//     formElement.onsubmit = function (e) {
//       e.preventDefault();
//       var isForm = true;
//       options.rules.forEach(function (rule) {
//         var inputElement = formElement.querySelector(rule.selector);
//         var isValid = Validate(inputElement, rule);
//         if (!isValid) {
//           isForm = false;
//         }
//       });
//       if (isForm) {
//         if (typeof options.onSubmit === "function") {
//           var enableInput = formElement.querySelectorAll["name"];
//           var formValues = Array.from(enableInput).reduce(function (
//             values,
//             input
//           ) {
//             values[input.name] = input.value;
//             return values;
//           },
//           {});
//           // alert("Gửi thông tin đi thành công");
//           location.reload();
//         }
//       } else {
//         // formElement.submit()
//       }
//     };

//     // console.log(formElement);
//     options.rules.forEach(function (rule) {
//       if (Array.isArray(selectorRules[rule.selector])) {
//         selectorRules[rule.selector].push(rule.test);
//       } else {
//         selectorRules[rule.selector] = [rule.test];
//       }

//       var inputElement = formElement.querySelector(rule.selector);

//       var errElement =
//         inputElement.parentElement.querySelector(".form-message");
//       if (inputElement) {
//         inputElement.onblur = function () {
//           var errMessage = rule.test(inputElement.value);
//           if (errMessage) {
//             errElement.innerText = errMessage;
//             errElement.style.color = "red";
//             errElement.style.fontSize = "1.4rem";
//           } else {
//             errElement.innerText = "";
//           }
//           inputElement.oninput = function () {
//             var errElement =
//               inputElement.parentElement.querySelector("form-message");
//             errElement.innerText = "";
//             inputElement.classList.remove("form-message");
//           };
//           // console.log(inputElement.parentElement.querySelector(rule.selector));
//         };
//       }
//     });
//     //   console.log(selectorRules);
//   }
// }

// Validator.isRequired = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value ? undefined : "Không được để trống";
//     },
//   };
// };
// Validator.isEmail = function (selector, message) {
//   return {
//     selector: selector,
//     test: function (value) {
//       var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return regex.test(value)
//         ? undefined
//         : message || "Điền thông tin E-mail của bạn !!!";
//     },
//   };
// };

// Validator({
//   form: "#formContact",
//   rules: [
//     Validator.isRequired("#name"),
//     Validator.isEmail("#email", "Điền đúng định dạng E-mail !!!"),
//     Validator.isRequired("#message"),
//   ],
//   onSubmit: function (data) {
//     // alert("Gửi thông tin thanfh công");
//   },
// });

sendMail = () => {
  document.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const nameValue = document.getElementById("username").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("messageNote").value.trim();

  const setError = (element, message) => {
    const errorMess = document.querySelector(".errorMessage");
    const errorMess2 = document.querySelector(".errorMessage2");
    const errorMess3 = document.querySelector(".errorMessage3");
    errorMess.innerText = message;
    errorMess2.innerText = message;
    errorMess3.innerText = message;
  };

  if (nameValue === "") {
    setError(username, "Vui lòng điền đầy đủ thông tin");
    return false;
  }

  if (emailValue === "") {
    setError(email, "Vui lòng điền đầy đủ thông tin");
    return false;
  }

  if (messageValue === "") {
    setError(messageNote, "Vui lòng điền đầy đủ thông tin");
    return false;
  }

  var params = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    messageNote: document.getElementById("messageNote").value,
  };

  const serviceID = "service_g5yvrwi";
  const templateID = "template_j3chk2j";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("messageNote").value = "";
      console.log(res);
      alert("Thông tin của bạn được gửi đi thành công");
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
