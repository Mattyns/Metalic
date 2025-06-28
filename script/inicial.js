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

//sumi menu escondido de pc ao alterar tamanho da tela

window.addEventListener('resize', function() {
document.querySelector('.menu__phone').style.display = 'none';
menulist.addEventListener('click', showmenu)

})



document.addEventListener('DOMContentLoaded', function () {
    var btn_agende = document.querySelector('.agende__button');
    var btn_agende2 = document.querySelector('.agende__button2');
    var email1 = document.querySelector('.email1');
    var exit_form = document.querySelector('.exit__form');

    btn_agende.addEventListener('click', displayemail1);
    btn_agende2.addEventListener('click', displayemail1);
    exit_form.addEventListener('click', exitemail);

    function displayemail1() {
        email1.style.display = 'block';
    }

    function exitemail() {
        email1.style.display = 'none';
    }

    // pc
    var pc2 = document.querySelector('.menu__pc2');
    var serv = document.querySelector('.menu__link2--special');

    let prevScroll = window.scrollY;

    window.addEventListener("scroll", function () {
        const menu = document.querySelector(".menu__pc");
        const currentScroll = window.scrollY;

        if (currentScroll > prevScroll) {
            menu.style.top = "-70px";
            pc2.style.display = 'none';
            serv.removeEventListener('click', hidesubmenu);
            serv.addEventListener('click', submenu);
        } else {
            menu.style.top = "15px";
        }

        prevScroll = currentScroll;
    });

    serv.addEventListener('click', submenu);

    function submenu() {
        pc2.style.display = 'block';
        serv.removeEventListener('click', submenu);
        serv.addEventListener('click', hidesubmenu);
    }

    function hidesubmenu() {
        pc2.style.display = 'none';
        serv.removeEventListener('click', hidesubmenu);
        serv.addEventListener('click', submenu);
    }
});






