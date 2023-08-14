"use strict";

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

// modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i=0; i<btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', openModal);
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keypress Event
// - keyboard events are global events.
document.addEventListener('keydown', function(e){
    // console.log(e);
    if (e.key === 'q' && !modal.classList.contains('hidden')){
        closeModal();
    }
})
