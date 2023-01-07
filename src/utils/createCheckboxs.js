function createCheckboxs(template, classes) {
  function formatTemplate(classItem, index) {
    const checkbox = template.content.firstElementChild.cloneNode(true);
    const [input] = [...checkbox.getElementsByTagName("input")];
    const [label] = checkbox.getElementsByClassName("class__label");
    const [title] = checkbox.getElementsByClassName("class__title");
    const [completed] = checkbox.getElementsByClassName("class__completed");
    const [toWatch] = checkbox.getElementsByClassName("class__to-watch");

    input.setAttribute("id", `class-${index}`);
    input.value = index;
    label.setAttribute("for", `class-${index}`);
    title.innerHTML = classItem.title;
    if (classItem.viewed) {
      toWatch.style.display = "none";
    } else {
      completed.style.display = "none";
    }

    return checkbox;
  }
  const checkboxs = classes.map(formatTemplate);
  return checkboxs;
}

export default createCheckboxs;
