const btnMenu = document.getElementById('menu_icon'),
menuHeader = document.querySelector(".menu_header"),
navlink = document.querySelectorAll(".nav_link"),
closeMenu = document.getElementById("close_icon");

//MOSTRAR MENU
function toggleMenu (){
    menuHeader.classList.toggle("active");
    closeMenu.classList.toggle("active");
    btnMenu.classList.add('none');
}

//FECHAR MENU ALTERANDO ICON
function removeMenu () {
    btnMenu.classList.remove('none');
    closeMenu.classList.remove("active");
    menuHeader.classList.remove("active");
}

closeMenu.addEventListener('click', removeMenu);
btnMenu.addEventListener('click', toggleMenu);

//REMOVE MENU CLICANDO NAV LINK DO MENU
function linkaction (){
    menuHeader.classList.remove('active');
    btnMenu.classList.remove('none');
    closeMenu.classList.remove("active");
}
navlink.forEach(n => n.addEventListener('click', linkaction));