var Menu = document.querySelector(".menu-bar");
var Toggele = document.getElementById("toggele");
var BtnScroll = document.querySelector(".btn-scroll-top");
var Scroll = document.getElementById("scroll-top");

Toggele.addEventListener("click", () => {
  Menu.classList.toggle("open");
  Toggele.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    BtnScroll.classList.add("active");
  } else {
    BtnScroll.classList.remove("active");
  }
  Scroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
