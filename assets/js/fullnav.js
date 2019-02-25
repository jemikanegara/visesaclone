const fullNav = document.getElementById("full-nav");
const navCloser = document.getElementById("close-nav");
const navOpener = document.getElementById("open-nav");

const closeNav = () => {
  fullNav.className = "full-nav hidden";
};

const openNav = () => {
  fullNav.className = "full-nav";
};

navCloser.addEventListener("click", closeNav);
navOpener.addEventListener("click", openNav);
