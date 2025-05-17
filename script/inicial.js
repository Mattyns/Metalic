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



var btn_agende = document.querySelector('.agende__button')
var btn_redirect = document.querySelector('.button--redirect')
var email1 = document.querySelector('.email1')
var exit_form = document.querySelector('.exit__form')

btn_agende.addEventListener('click', displayemail1)
btn_redirect.addEventListener('click', displayemail1)
exit_form.addEventListener('click', exitemail)

function displayemail1() {
    email1.style.display = 'block'

}

function exitemail() {
    email1.style.display = 'none'
}



