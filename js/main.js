function submitMailAddress() {
  let address = document.querySelector("#inputMail").value;

  console.log(address);

  if (
    address.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    )
  ) {
    console.log("passt");
    document.querySelector("#errorIcon").style.display = "none";
    document.querySelector("#errorMsg").style.display = "none";
    document.querySelector("#validMsg").style.display = "block";
  } else {
    console.log(" bast ed");
    document.querySelector("#errorIcon").style.display = "inline";
    document.querySelector("#errorMsg").style.display = "block";
    document.querySelector("#validMsg").style.display = "none";
  }
}

function init() {
  document
    .querySelector("#submitBtn")
    .addEventListener("click", submitMailAddress);
}

window.addEventListener("load", init);
