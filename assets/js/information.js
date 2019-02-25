// Toggle Special
const hiddenSpecial = document.getElementById("hidden-special");
const specialCloser = document.getElementById("hide-special");
const specialOpener = document.getElementById("show-special");

const hideSpecial = () => {
  hiddenSpecial.classList.add("hidden");
  specialOpener.classList.remove("hidden");
};

const showSpecial = () => {
  hiddenSpecial.classList.remove("hidden");
  specialOpener.classList.add("hidden");
};

specialCloser.addEventListener("click", hideSpecial);
specialOpener.addEventListener("click", showSpecial);

// Toggle Timeline
const hiddenTimeline = document.getElementById("hidden-timeline");
const timelineCloser = document.getElementById("hide-timeline");
const timelineOpener = document.getElementById("show-timeline");

const hideTimeline = () => {
  hiddenTimeline.classList.add("hidden");
  timelineOpener.classList.remove("hidden");
};

const showTimeline = () => {
  hiddenTimeline.classList.remove("hidden");
  timelineOpener.classList.add("hidden");
};

timelineCloser.addEventListener("click", hideTimeline);
timelineOpener.addEventListener("click", showTimeline);
