function addClickEvent(id, func) {
  const button = document.getElementById(id);
  button.addEventListener("click", func);
}

export default addClickEvent;
