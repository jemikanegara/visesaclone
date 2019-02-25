const scrollHeader = () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("header-1").classList.add("hidden");
    document.getElementById("header-2").classList.remove("hidden");
  } else {
    document.getElementById("header-1").classList.remove("hidden");
    document.getElementById("header-2").classList.add("hidden");
  }
};

window.onscroll = () => {
  scrollHeader();
};
