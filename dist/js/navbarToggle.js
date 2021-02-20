const btnCloseNavbar = document.getElementById('btn-close-navbar');
const sidebar = document.getElementById('sidebar');
const btnOpenMenu = document.getElementById('btn-menu-open');

sidebar.style.transform = "translateX(-100%)";

btnOpenMenu.addEventListener('click', ()=> {
    sidebar.style.transition = '0.5s ease';
    sidebar.style.transform = "translateX(0%)";
});

btnCloseNavbar.addEventListener('click', ()=> {
    sidebar.style.transition = '0.5s ease';
    sidebar.style.transform = "translateX(-100%)";
});

