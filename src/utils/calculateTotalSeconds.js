function calculateTotalSeconds(event, inputsContainer) {
  function changeValue(node, value) {
    if (value < 10) {
      node.value = "0" + value;
    } else {
      node.value = value;
    }
  }

  const [hoursNode, minutesNode, secondsNode] = [
    ...inputsContainer.querySelectorAll("input"),
  ];
  let seconds = Number(secondsNode.value);
  let minutes = Number(minutesNode.value);
  let hours = Number(hoursNode.value);

  if (seconds > 59) {
    const extraMins = Math.floor(seconds / 60);
    seconds = seconds - extraMins * 60;
    minutes += extraMins;
  }

  if (minutes > 59) {
    const extraHours = Math.floor(minutes / 60);
    minutes = minutes - extraHours * 60;
    hours += extraHours;
  }
  changeValue(secondsNode, seconds);
  changeValue(minutesNode, minutes);
  changeValue(hoursNode, hours);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
}

export default calculateTotalSeconds;
