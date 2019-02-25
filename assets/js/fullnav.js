const fullNav = document.getElementById("full-nav");
const navCloser = document.getElementById("close-nav");
const navOpener = document.getElementById("open-nav");

const closeNav = () => {
  fullNav.classList.add("hidden");
};

const openNav = () => {
  fullNav.classList.remove("hidden");
};

navCloser.addEventListener("click", closeNav);
navOpener.addEventListener("click", openNav);
