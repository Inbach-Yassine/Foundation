var Menu = document.querySelector(".menu-bar");
var Toggele = document.getElementById("toggele");

Toggele.addEventListener("click", () => {
  Menu.classList.toggle("open");
  Toggele.classList.toggle("open");
});
