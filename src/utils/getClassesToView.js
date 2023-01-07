function getClassesToView(totalSeconds, notViewed) {
  if (notViewed.length == 0) {
    return [];
  }
  const classesArray = [];
  let sum = 0;
  for (let i = 0; i < notViewed.length; i++) {
    const notViewedClass = notViewed[i];
    sum += notViewedClass.time;
    if (sum < totalSeconds) {
      classesArray.push(notViewedClass);
    } else {
      break;
    }
  }
  return classesArray;
}

export default getClassesToView;
