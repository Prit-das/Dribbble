// Js for hemaberger icon
const hamberger = document.querySelector('#hamberger-icon');
// Js for Mobile menu
const mobileMenu = document.querySelector('#mobileMenu');

hamberger.addEventListener('click', function (){
    hamberger.classList.toggle('iconopen');
    mobileMenu.classList.toggle('trans');
})