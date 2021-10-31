function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var nav = document.querySelector('.navigation');
  menuToggle.classList.toggle('active_toggle');
  nav.classList.toggle("active_toggle");
}

// var hamburger = document.querySelector(".nav__hamburger");
// const nav = document.querySelector(".nav__ul");

// hamburger.addEventListener("click", function () {
//   nav.classList.toggle("show-menu");

//   if ((hamburger.src = "images/icon-hamburger.svg")) {
//     hamburger.src = "images/icon-close.svg";
//   } else {
//     hamburger.src = "images/icon-hamburger.svg";
//   }
// });