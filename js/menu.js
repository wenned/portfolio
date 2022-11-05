function openMenu() {
    var menu = document.getElementById('menu')

    var men = document.getElementById('hmenu')
    var remo = document.getElementById('hmenu1')

    menu.style.display = 'block'

    men.removeChild(remo)

    men.innerHTML = `
    
    <a id="hmenu1" href="#" onclick="hiddenMenu()"><img src="img/icons/menu/close.svg" alt=""></a>

    `

};



function hiddenMenu() {

    var menu2 = document.getElementById('menu')

    var menu = document.getElementById('hmenu')
    var remo = document.getElementById('hmenu1')

    menu.removeChild(remo)
    
    menu2.style.display = 'none'

    menu.innerHTML = `
    
    <a id="hmenu1" href="#" onclick="openMenu()"><img src="img/icons/menu/ellipsis.svg" alt=""></a>

    `


}

let ativa = document.querySelector('.toggle')
let ativamenu = document.querySelector('.menuPrincipal')
let men = document.querySelector('.menu')

ativa.onclick = function(){
    ativamenu.classList.toggle('active')
    ativa.classList.toggle('active')
    men.classList.toggle('active')

}
