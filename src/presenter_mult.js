import multiplicar from "./multiplicador";

const first = document.querySelector("#num1");
const second = document.querySelector("#num2");
const form = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resumult-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});