/* ///// Javascript for background change when scroll ///// */
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 10)
});

// adding event listener to window for loader
const webLoader = document.querySelector('.loader');
window.addEventListener('load', () => {
   webLoader.classList.add('loaderHide');
});

/* ///// Navugation Menu Toggle ///// */
const menu = document.querySelector(".navbar");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const Header = document.querySelector('header');

openBtn.addEventListener('click', () => {
  menu.style.right = "0";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
  Header.style.background = "#fff";
})

// declared function of close nav
const closeNav = () => {
  menu.style.right = "-100%";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
  Header.style.background = "#ffffff";

}

// event listener for close btn
closeBtn.addEventListener('click', closeNav);
// navigation toggle end