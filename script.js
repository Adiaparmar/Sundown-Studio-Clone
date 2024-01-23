const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elemC = document.querySelector("#elem-container");
var fix = document.querySelector("#fixed-img");
elemC.addEventListener("mouseenter", function () {
  fix.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
  fix.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-img");
    fix.style.backgroundImage = `url(${image})`;
  });
});

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 100,
  });
}

swiperAnimation();

var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var fullDiv = document.querySelector("#full-div1");
var h2 = document.querySelectorAll("#full-div1 #h");
var navimg = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    fullDiv.style.top = 0;
    navimg.style.opacity = 0;
    flag = 1;
  } else {
    full.style.top = "-100%";
    fullDiv.style.top = "-100%";
    navimg.style.opacity = 1;
    flag = 0;
  }
});

var loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4000);
