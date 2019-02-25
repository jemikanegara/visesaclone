const hiddenStory = document.getElementById("hidden-story");
const storyCloser = document.getElementById("hide-story");
const storyOpener = document.getElementById("show-story");

const hideStory = () => {
  hiddenStory.classList.add("hidden");
  storyOpener.classList.remove("hidden");
};

const showStory = () => {
  hiddenStory.classList.remove("hidden");
  storyOpener.classList.add("hidden");
};

storyCloser.addEventListener("click", hideStory);
storyOpener.addEventListener("click", showStory);
