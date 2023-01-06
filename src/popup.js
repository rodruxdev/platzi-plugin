import { home } from "./templates/home.js";
import { classes } from "./templates/classes.js";
import { time } from "./templates/time.js";

const main = document.getElementById("main");
const backButton = document.getElementById("back");
main.innerHTML = home;
addClickEvent("time-calc", showClassesSelection);
addClickEvent("back", backToHome);

function showClassesSelection() {
  main.innerHTML = classes;
  backButton.style.opacity = 1;
  backButton.disabled = false;
  addClickEvent("class-calc", showTimeSelection);
}

function backToHome() {
  main.innerHTML = home;
  backButton.style.opacity = 0;
  backButton.disabled = true;
  addClickEvent("time-calc", showClassesSelection);
}

function addClickEvent(id, func) {
  const button = document.getElementById(id);
  button.addEventListener("click", func);
}

function showTimeSelection() {
  main.innerHTML = time;
  addClickEvent("time-calc", showClassesSelection);
}
