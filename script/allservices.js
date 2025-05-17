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