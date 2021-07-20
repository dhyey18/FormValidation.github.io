const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isvalid = false;
let passMatch = false;

const isFormValid = () => {
  // using constrain API
  isvalid = form.checkValidity();
  console.log(isvalid);

  // Update Message
  message.textContent = "Please fill out all field";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";

  // Check to see if password match
  if (password1.value === password2.value) {
    passMatch = true;
    password1.style.borderColor = "green";
    password2.style.borderColor = "green";
  } else {
    passMatch = false;
    message.textContent = "Make sure password match.";
    password1.style.borderColor = "red";
    password2.style.borderColor = "red";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  if (isvalid && passMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
};

const processFormData = (e) => {
  e.preventDefault();
  isFormValid();
};

form.addEventListener("submit", processFormData);
