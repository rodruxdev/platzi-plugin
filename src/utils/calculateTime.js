function calculateTime(data, option = 0) {
  const totalSeconds = data.reduce((total, item) => {
    switch (option) {
      case 1:
        if (item.viewed) {
          total += item.time ?? 0;
        }
        break;
      case 2:
        if (!item.viewed) {
          total += item.time ?? 0;
        }
        break;
      default:
        total += item.time ?? 0;
    }
    return total;
  }, 0);

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor(totalSeconds / 60) - hours * 60;
  let seconds = totalSeconds - minutes * 60 - hours * 3600;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return { hours, minutes, seconds };
}

export default calculateTime;
