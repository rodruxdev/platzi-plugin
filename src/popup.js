import { home } from "./templates/home.js";
import { classes } from "./templates/classes.js";
import { time } from "./templates/time.js";
import getData from "./utils/getData.js";
import calculateTime from "./utils/calculateTime.js";

const [tab] = await chrome.tabs.query({ active: true });
const url = tab.url;
const CLASSES_URL_REGEX = new RegExp("https://platzi.com/cursos/*");
const main = document.getElementById("main");
const backButton = document.getElementById("back");
main.innerHTML = home;
addClickEvent("time-calc", showClassesSelection);
addClickEvent("back", backToHome);

let data = [];
if (url.match(CLASSES_URL_REGEX)) {
  data = await getData(tab.id);
} else {
  console.log("No es una landing de curso.");
}

const totalTime = calculateTime(data);
const viewedTime = calculateTime(data, 1);
const leftTime = calculateTime(data, 2);

showTime("total-time", totalTime);
showTime("viewed-time", viewedTime);
showTime("left-time", leftTime);

function showTime(id, time) {
  const timeNode = document.getElementById(id);
  const [hoursNode, minutesNode, secondsNode] = [
    ...timeNode.querySelectorAll("span"),
  ];
  hoursNode.innerHTML = time.hours;
  minutesNode.innerHTML = time.minutes;
  secondsNode.innerHTML = time.seconds;
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
