const signupCard = document.querySelector(".card");
const subscribedCard = document.querySelector(".subscribedCard");

const emailInput = document.querySelector(".emailInput");
const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function () {
  validateEmail();
});

function validateEmail() {
  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    console.log("invalid");
    emailInput.style.border = "2px solid red";
  } else {
    console.log("valid");
  }
}
