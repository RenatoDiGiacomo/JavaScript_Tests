const desktop = document.querySelector(".desktop");
const mobile = document.querySelector(".mobile");
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerList = document.querySelectorAll(".hamburger span");
const sidemap = document.querySelector(".mobile .sidenav");
// const hamburgerSpan = document.querySelectorAll(".hamburger span");
// const arrHamburgerSpan = Array.from(hamburgerSpan);

mobile.style.display = "none";

if (desktop.clientWidth <= 700 || mobile.clientWidth > 700) {
  desktop.style.display = "none";
  mobile.style.display = "flex";
}

function sideNav() {
  sidemap.classList.toggle("active");
}
function hamburger() {
  hamburgerList.forEach((e) => {
    e.classList.toggle("active");
  });
}
hamburgerBtn.addEventListener("click", sideNav);
hamburgerBtn.addEventListener("click", hamburger);
