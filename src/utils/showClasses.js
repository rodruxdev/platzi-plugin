function showClasses(template, container, classes) {
  function formatTemplate(classItem) {
    const classContainer = template.content.firstElementChild.cloneNode(true);
    const [title] = classContainer.getElementsByClassName("class__title");
    const [completed] =
      classContainer.getElementsByClassName("class__completed");
    const [toWatch] = classContainer.getElementsByClassName("class__to-watch");

    title.innerHTML = classItem.title;
    if (classItem.viewed) {
      toWatch.style.display = "none";
    } else {
      completed.style.display = "none";
    }

    return classContainer;
  }
  if (classes.length == 0) {
    container.innerHTML = `
    <h1>No hay clases por ver.</h1>
    <p style="text-align: center;">En este tiempo no podrás terminar tu siguiente clase.<br>Prueba aumentando el tiempo.</p>
  `;
    return;
  }
  const classesContainers = classes.map(formatTemplate);
  container.innerHTML = "";
  container.append(...classesContainers);
}

export default showClasses;
