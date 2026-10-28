
const button = document.querySelector("#change-button");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "You just made a website interactive!";
});
