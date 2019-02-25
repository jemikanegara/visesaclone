const promo = document.getElementById("floating-promo");
const promoCloser = document.getElementById("close-promo");
const promoOpener = document.getElementById("show-promo");

const closePromo = () => {
  promo.classList.add("hidden");
  promoOpener.classList.remove("hidden");
};

const showPromo = () => {
  promo.classList.remove("hidden");
  promoOpener.classList.add("hidden");
};

promoCloser.addEventListener("click", closePromo);
promoOpener.addEventListener("click", showPromo);
