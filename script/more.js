var btn_agende = document.querySelector('.agende__button')
var email1 = document.querySelector('.email1')
var exit_form = document.querySelector('.exit__form')

btn_agende.addEventListener('click', displayemail1)
exit_form.addEventListener('click', exitemail)

function displayemail1() {
    email1.style.display = 'block'

}

function exitemail() {
    email1.style.display = 'none'
}

//sumi menu escondido de pc ao alterar tamanho da tela

window.addEventListener('resize', function() {
document.querySelector('.menu__phone').style.display = 'none';
menulist.addEventListener('click', showmenu)

})



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




// pc

// submenu serviços

var pc2 = document.querySelector('.menu__pc2')
var serv = document.querySelector('.menu__link2--special')

// menu que desaparece e reaparece



let prevScroll = window.scrollY;

window.addEventListener("scroll", function () {
    const menu = document.querySelector(".menu__pc");
    const currentScroll = window.scrollY;

    if (currentScroll > prevScroll) {
    // Rolando para baixo
    menu.style.top = "-70px";

    pc2.style.display = 'none'
    serv.removeEventListener('click', hidesubmenu)
    serv.addEventListener('click', submenu)

    } else {
    // Rolando para cima
    menu.style.top = "15px";
    }

    prevScroll = currentScroll;
});


// submenu serviços 2 

serv.addEventListener('click', submenu)

function submenu() {
    pc2.style.display = 'block'
    serv.removeEventListener('click', submenu)
    serv.addEventListener('click', hidesubmenu)
}

function hidesubmenu() {
    pc2.style.display = 'none'
    serv.removeEventListener('click', hidesubmenu)
    serv.addEventListener('click', submenu)

}




