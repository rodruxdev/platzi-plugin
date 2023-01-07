async function getData(tabId) {
  function scriptData() {
    function getClassData(element) {
      // Get title, time and viewed status
      const title = element.querySelector("h5").textContent;
      const timeNode = element.querySelector("p");
      const viewedNode = element.querySelector(".ToggleClassAsSeen-tooltip");
      let timeInText;
      let viewedText;
      if (timeNode) {
        timeInText = timeNode.textContent;
      } else {
        return {};
      }
      if (viewedNode) {
        viewedText = viewedNode.textContent;
      } else {
        return {};
      }
      // Calculate total seconds
      const [minutes, seconds] = timeInText.split(" ")[0].split(":");
      const totalSeconds = Number(minutes) * 60 + Number(seconds);

      // Get viewed status
      let viewed = false;
      if (viewedText.includes("no")) {
        viewed = true;
      }
      return { title, time: totalSeconds, viewed };
    }

    const nodeClasses = [...document.querySelectorAll(".ContentClass")];
    const data = nodeClasses.map(getClassData);
    return data;
  }

  const [res] = await chrome.scripting.executeScript({
    target: { tabId },
    function: scriptData,
  });

  return res.result;
}

export default getData;
