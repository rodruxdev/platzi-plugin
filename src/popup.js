import { home } from "./templates/home.js";
import { classes } from "./templates/classes.js";
import { time } from "./templates/time.js";

const main = document.getElementById("main");
const backButton = document.getElementById("back");
main.innerHTML = home;
addClickEvent("time-calc", showClassesSelection);
addClickEvent("back", backToHome);

const [tab] = await chrome.tabs.query({ active: true });
const url = tab.url;
const CLASSES_URL_REGEX = new RegExp("https://platzi.com/cursos/*");
if (url.match(CLASSES_URL_REGEX)) {
  const res = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      return "Si es una landing de curso.";
    },
  });
  console.log("🚀 ~ file: popup.js:21 ~ res", res);
} else {
  console.log("No es una landing de curso.");
}

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
