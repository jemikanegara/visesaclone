const scrollHeader = () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("header-1").className = "hidden";
    document.getElementById("header-2").className = "fixed-header-2";
    console.log("work");
  } else {
    document.getElementById("header-1").className = "fixed-header-1";
    document.getElementById("header-2").className = " hidden";
  }
};

window.onscroll = () => {
  scrollHeader();
};
