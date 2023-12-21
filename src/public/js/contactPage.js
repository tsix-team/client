

sendMail = () => {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const messageNoteInput = document.getElementById("messageNote");

  document.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const nameValue = usernameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageNoteInput.value.trim();

  const setError = (element, message) => {
    const errorMessage = element.nextElementSibling;
    errorMessage.innerText = message;
  };

  if (nameValue === "") {
    setError(usernameInput, "Vui lòng nhập tên của bạn");
    return false;
  }

  if (emailValue === "") {
    setError(emailInput, "Email không được bỏ trống");
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    setError(emailInput, "Vui lòng nhập một địa chỉ email hợp lệ");
    return false;
  }

  if (messageValue === "") {
    setError(messageNoteInput, "Hãy gửi tin nhắn cho chúng tôi");
    return false;
  }

  var params = {
    username: nameValue,
    email: emailValue,
    messageNote: messageValue,
  };

  const serviceID = "service_g5yvrwi";
  const templateID = "template_j3chk2j";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      usernameInput.value = "";
      emailInput.value = "";
      messageNoteInput.value = "";
      console.log(res);
      alert("Thông tin của bạn đã được gửi đi thành công");
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
