"use strict";
const buttons_length = document.querySelectorAll(".buttons");

const display = document.querySelector(".display");

let disVar = "";

for (let i = 0; i < buttons_length.length; i++) {
  buttons_length[i].addEventListener("click", function () {
    if (disVar === "0") {
      disVar = "0";
    }

    if (buttons_length[i].textContent === "=" && disVar !== "") {
      disVar = String(eval(disVar));
      display.value = disVar;
    } else if (buttons_length[i].textContent === "=" && disVar === "") {
      display.value = disVar;
    } else if (buttons_length[i].textContent === "x") {
      disVar += "*";
      display.value = disVar;
    } else if (buttons_length[i].textContent === "AC") {
      disVar = "";
      display.value = disVar;
    } else if (buttons_length[i].textContent === "DEL") {
      disVar = disVar.substring(0, disVar.length - 1);
      display.value = disVar;
    } else {
      disVar += buttons_length[i].textContent;
      console.log((display.value = disVar));
    }
  });
}
