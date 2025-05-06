var menulist = document.querySelector('.menu__list')
var menuphone = document.querySelector('.menu__phone')

menulist.addEventListener('click', showmenu)

function showmenu() {
    menuphone.style.display = 'block'
    menulist.removeEventListener('click', showmenu)
    menulist.addEventListener('click', hidemenu)
    
}

function hidemenu() {
    menuphone.style.display = 'none'
    menulist.removeEventListener('click', hidemenu)
    menulist.addEventListener('click', showmenu)
    
}