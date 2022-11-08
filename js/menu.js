let ativa = document.querySelector('.toggle')
let ativamenu = document.querySelector('.menuPrincipal')
let men = document.querySelector('.menu')

ativa.onclick = function(){
    ativamenu.classList.toggle('active')
    ativa.classList.toggle('active')
    men.classList.toggle('active')

}
