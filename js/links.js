function linK(){
    var lin = document.getElementById('link')
    lin.innerHTML = `
    <li><a href="download/index.html" title="HyperText Markup Language" style="color: #232399" download="txt/html">Download HTML Index</a></li>
    <li><a target="_blank" href="download/projeto.txt" title="HyperText Markup Language" style="color: #232399 download="txt/html">Download HTML Pag.Projeto</a></li>
    <li><a href="download/style.css" title="Cascading Style Sheets" style="color: #232399 download="txt/css">Download CSS</a></li>
    <li><a href="download/links.js" title="JavaScript" style="color: #232399 download="application/ecmascript">Download código JS</a></li> 
    `
}

function enviaR(){
    var mail = document.getElementById('email')
    var no = document.getElementById('nomecontato')
    var are = document.getElementById('texare')

    let encremento = {primeiro:'Olá', rest:'sua mensagem foi enviada',nome:''}
    encremento[nome] = no.value

    if(no.value != ''){
        alert(`${encremento.primeiro}, ${no.value} ${encremento.rest}`)
    }else{
        alert('[ERRO], Dados incorretos tente novamente.')
    }
}

function linK1(){
    var res = document.querySelector('ol#link1')
    
    res.innerHTML = `
        <li><a target="_blank" href="download/img/paginainteira.png" style="color: #232399">Pagina Inteira</a></li>
        <li><a target="_blank" href="download/img/areaprojeto.png" style="color: #232399">Area Projeto</a></li>
        <li><a target="_blank" href="download/img/sobre.png" style="color: #232399">Area Sobre</a></li>
        <li><a target="_blank" href="download/img/areacontato.png" style="color: #232399">Area Contato</a></li>
        <li><a target="_blank" href="download/img/estrutura.png" style="color: #232399">Estrutura Projeto</a></li>
    
    `


    
}