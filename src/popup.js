import { home } from "./templates/home.js";
import { classes } from "./templates/classes.js";
import { time } from "./templates/time.js";
import getData from "./utils/getData.js";
import calculateTime from "./utils/calculateTime.js";
import addClickEvent from "./utils/addClickEvent.js";
import createCheckboxs from "./utils/createCheckboxs.js";

// Show functions
function showHome() {
  main.innerHTML = home;
  backButton.style.opacity = 0;
  backButton.disabled = true;
  addClickEvent("time-calc", showClassesSelection);
  showTime("total-time", totalTime);
  showTime("viewed-time", viewedTime);
  showTime("left-time", leftTime);
}

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
  const checkboxs = createCheckboxs(checkBoxTemplate, data);
  const checkboxsContainer = document.getElementById("checkboxs-container");
  checkboxsContainer.append(...checkboxs);
  checkboxsContainer.addEventListener("change", (event) => {
    const index = event.target.value;
    const selectedClassIndex = selectedClasses.findIndex(
      (selected) => selected.id == index
    );
    if (selectedClassIndex === -1) {
      selectedClasses.push({ ...data[index], id: index });
    } else {
      selectedClasses.splice(selectedClassIndex, 1);
    }
    const classesTime = calculateTime(selectedClasses);
    showTime("classes-time", classesTime);
  });
}

function showTimeSelection() {
  main.innerHTML = time;
  addClickEvent("time-calc", showClassesSelection);
}

// Init plugin
const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
const url = tab.url;
const CLASSES_URL_REGEX = new RegExp("https://platzi.com/cursos/*");
let totalTime = {};
let viewedTime = {};
let leftTime = {};
let selectedClasses = [];

const main = document.getElementById("main");
const backButton = document.getElementById("back");
const checkBoxTemplate = document.getElementById("checkbox-template");
addClickEvent("back", showHome);

let data = [];
if (url.match(CLASSES_URL_REGEX)) {
  data = await getData(tab.id);
  totalTime = calculateTime(data);
  viewedTime = calculateTime(data, 1);
  leftTime = calculateTime(data, 2);
  showHome();
} else {
  console.log("No es una landing de curso.");
}
