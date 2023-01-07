async function getData(tabId) {
  function scriptData() {
    function getClassData(data, element) {
      // Get title, time and viewed status
      const title = element.querySelector("h5").textContent;
      const timeNode = element.querySelector("p");
      const viewedNode = element.querySelector(".ToggleClassAsSeen-tooltip");
      let timeInText;
      let viewedText;
      if (timeNode) {
        timeInText = timeNode.textContent;
      } else {
        return data;
      }
      if (viewedNode) {
        viewedText = viewedNode.textContent;
      } else {
        return data;
      }
      // Calculate total seconds
      const [minutes, seconds] = timeInText.split(" ")[0].split(":");
      const totalSeconds = Number(minutes) * 60 + Number(seconds);

      // Get viewed status
      let viewed = false;
      if (viewedText.includes("no")) {
        viewed = true;
      }
      data.push({ title, time: totalSeconds, viewed });
      return data;
    }

    const nodeClasses = [...document.querySelectorAll(".ContentClass")];
    const data = nodeClasses.reduce(getClassData, []);
    return data;
  }

  const [res] = await chrome.scripting.executeScript({
    target: { tabId },
    function: scriptData,
  });

  return res.result;
}

export default getData;
