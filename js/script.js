const btnMenu = document.getElementById('menu'),
menuHeader = document.querySelector(".menu_header"),
navlink = document.querySelectorAll(".nav_link");


//MOSTRAR MENU
function toggleMenu (){
    menuHeader.classList.toggle("active");
}

btnMenu.addEventListener('click', toggleMenu);

//REMOVE MENU CLICANDO NAV LINK DO MENU
function linkaction (){
    menuHeader.classList.remove('active');
}
navlink.forEach(n => n.addEventListener('click', linkaction));

