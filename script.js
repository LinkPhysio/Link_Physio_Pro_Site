const breakpoints = Object.freeze({
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
});

function getMenuIcon(state) {
  if (state === "open") {
    return "menu";
  }

  return "close";
}

function handleMenuClick(btn) {
  const navMenu = document.querySelector(".main-nav");
  const navMenuLinks = document.querySelectorAll(".main-nav > a");
  const openIcon = btn.querySelector("#open");
  const closeIcon = btn.querySelector("#close");

  //open the menu
  if (btn.innerText !== "close") {
    navMenu.style.backgroundColor = "#2c6e49";
    navMenu.style.display = "block";
    navMenu.style.position = "absolute";
    navMenu.style.top = "100%";
    navMenu.style.minWidth = "100%";
    navMenu.style.left = "0";
    // navMenu.style.transform = "translate(-50%. -50%)";
    navMenuLinks.forEach((link) => (link.style.display = "block"));
    closeIcon.style.display = "";
    openIcon.style.display = "none";
  }
  //close the menu
  else {
    navMenu.style.display = "none";
    navMenu.style.position = "flex";
    navMenu.style.minWidth = "";
    navMenu.style.transform = "";
    navMenuLinks.forEach((link) => (link.style.display = ""));
    closeIcon.style.display = "none";
    openIcon.style.display = "";
  }
}

function adjustMenuForMobile() {
  const navMenu = document.querySelector(".main-nav");
  const navMenuBtn = document.querySelector("#menu-btn");
  const navMenuLinks = document.querySelectorAll(".main-nav > a");
  const closeIcon = navMenuBtn.querySelector("#close");
  const openIcon = navMenuBtn.querySelector("#open");

  const mdScreen = window.matchMedia(
    `(min-width: ${breakpoints.md}px)`
  ).matches;

  closeIcon.style.display = "none";
  openIcon.style.display = "";

  if (!mdScreen) {
    navMenuBtn.style.display = "";
    navMenu.style.display = "none";
  } else {
    navMenuBtn.style.display = "none";

    navMenu.style.display = "flex";
    navMenu.style.minWidth = "";
    navMenu.style.position = "";
    navMenu.style.transform = "";
    navMenuLinks.forEach((link) => (link.style.display = ""));
    closeIcon.style.display = "none";
    openIcon.style.display = "";
  }
}

window.addEventListener("resize", adjustMenuForMobile);
window.addEventListener("load", adjustMenuForMobile);
