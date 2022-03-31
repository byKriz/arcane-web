// javascript responsive-menu.js

const menuBTN = document.getElementById('menu-btn');
const nav = document.getElementById('nav-container');

// agregando evento
menuBTN.addEventListener('click', () => {
    menuBTN.classList.toggle('active'); //agregamos una class al elemento
    nav.classList.toggle('active');
})
