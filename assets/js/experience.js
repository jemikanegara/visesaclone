const experiences = document.querySelectorAll(".hidden-experience");
const expClosers = document.querySelectorAll(".hide-experience");
const expOpeners = document.querySelectorAll(".show-experience");

const hideExp = id => {
  experiences[id].classList.add("hidden");
  expOpeners[id].classList.remove("hidden");
};

const showExp = id => {
  experiences[id].classList.remove("hidden");
  expOpeners[id].classList.add("hidden");
};

expClosers.forEach((exp, index) => {
  exp.addEventListener("click", () => {
    hideExp(index);
  });
});

expOpeners.forEach((exp, index) => {
  exp.addEventListener("click", () => {
    showExp(index);
  });
});
