function linK(){
    var lin = document.getElementById('link')
    lin.innerHTML = `
    <li><a href="download/index.html" title="HyperText Markup Language" style="color: #232399" download="txt/html">Download HTML Index</a></li>
    <li><a href="download/projeto1.html" title="HyperText Markup Language" style="color: #232399 download="txt/html">Download HTML Pag.Projeto</a></li>
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