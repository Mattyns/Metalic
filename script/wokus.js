
const opcoes = document.querySelectorAll('.opcao');
        opcoes.forEach(opcao => {
            opcao.addEventListener('click', () => {
            opcao.classList.toggle('selecionado');
        });
        });



document.addEventListener('DOMContentLoaded', function () {
    

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


    var enviarform = document.querySelector('.f__submit')

    enviarform.addEventListener('submit', e_form)

    function e_form() {

        window.alert('oiii')
        var email2 = document.querySelector('.email2__form')

        email2.style.display = 'none'
    }
});