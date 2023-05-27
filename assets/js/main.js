const menuButton = document.querySelector('.header__button');
console.log(menuButton);
const menuMobile = document.querySelector('.menu__mobile');

menuButton.addEventListener('click', function() {
    menuMobile.classList.toggle('mobile__active');
})