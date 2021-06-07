let inputMail = document.querySelector("#inputMail");
let errorIcon = document.querySelector("#errorIcon");
let errorMsg = document.querySelector("#errorMsg");
let validMsg = document.querySelector("#validMsg");
let submitMsg = document.querySelector("#submitMsg");
let submitBtn = document.querySelector("#submitBtn");

function verifyMailAddress() {
  if (
    inputMail.value.match(
      /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{1,3}|\d+)$/i
    )
  ) {
    errorIcon.style.display = "none";
    errorMsg.style.display = "none";
    validMsg.style.display = "block";
    submitMsg.style.display = "none";
    submitBtn.disabled = false;
  } else {
    errorIcon.style.display = "inline";
    errorMsg.style.display = "block";
    validMsg.style.display = "none";
    submitMsg.style.display = "none";
    submitBtn.disabled = true;
  }
}

function submitMailAddress() {
  submitMsg.style.display = "block";
  validMsg.style.display = "none";
  submitBtn.disabled = true;
}

function init() {
  document
    .querySelector("#submitBtn")
    .addEventListener("click", submitMailAddress);

  document
    .querySelector("#inputMail")
    .addEventListener("keypress", verifyMailAddress);

  document.querySelector(".inputBox").addEventListener("click", (el) => {
    inputMail.focus();
  });
}

window.addEventListener("load", init);
