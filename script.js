const signupCard = document.querySelector(".card");
const subscribedCard = document.querySelector(".subscribedCard");

const emailInput = document.querySelector(".emailInput");
const invalidEmailMsg = document.querySelector(".invalidEmailMsg");
const submitBtn = document.querySelector(".submitBtn");
const dismissBtn = document.querySelector(".dismissBtn");

submitBtn.addEventListener("click", function () {
  validateEmail();
});

function validateEmail() {
  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    invalidEmailMsg.removeAttribute("hidden");
    emailInput.style.backgroundColor = "#FFCDD2";
  } else {
    signupCard.style.display = "none";
    subscribedCard.removeAttribute("hidden");
    emailInput.style.backgroundColor = "white";
    invalidEmailMsg.setAttribute("hidden", "");
  }
}

dismissBtn.addEventListener("click", function () {
  subscribedCard.setAttribute("hidden", "");
  signupCard.style.removeProperty("display");
});
