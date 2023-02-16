import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});


import multi from "./multiplicador";

const firstNumber = document.querySelector("#primer_numero");
const secondNumber = document.querySelector("#segundo-numero");
const form2 = document.querySelector("#multi-form");
const div2 = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstNumber.value);
  const secondNumber = Number.parseInt(secondNumber.value);

  div.innerHTML = "<p>" + multi(firstNumber, secondNumber) + "</p>";
});