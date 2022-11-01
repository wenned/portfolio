function mostratextZero(){

    var texto = document.getElementById('proj0')
    var desc = document.getElementById('descricaO')

    var element = document.getElementById('verifica')
    texto.removeChild(element)

    texto.innerHTML = `
    <div id="verifica">


    <img id="portfolio" src="img/portifolio.png" alt="imagem primeiro projeto portifolio">

    `
    desc.style.display = 'block';
}

function mostratextOne(){

    var texto = document.getElementById('proj0')
    var desc = document.getElementById('descricaO')

    var element = document.getElementById('verifica')
    texto.removeChild(element)


    texto.innerHTML = `
    <div id="verifica">

    <img id="portfolio" src="img/gerenciador.png" alt="imagem primeiro projeto portifolio">
    </div>
    `
    desc.style.display = 'block';
}

function mostratextTwo(){

    // var texto = document.getElementById('proj0') 
    // var desc = document.getElementById('descricaO')

    // var element = document.getElementById('verifica')
    // texto.removeChild(element)

    // texto.innerHTML = `

    // <div id="verifica">

    // <h1>PROJETO II</h1>

    // <h1>Links Download Codigos:</h1>
    // <div>
    //     <ol id="link" type="1"> </ol>
    // </div>
    // <br>
    // <button class="field" style="cursor: pointer; border: none; background-color: #6ca56c; color: white " onclick="linK()">Gerar links Arquivos</button>
    // </div>

    // </div>
    // </div>
    // `
    // desc.style.display = 'none';
}

function mostratextThree(){

    // var texto = document.getElementById('proj0')
    // var desc = document.getElementById('descricaO')
    // var element = document.getElementById('verifica')
    // texto.removeChild(element)

    // texto.innerHTML = `
    // <div id="verifica">

    // <h1>PROJETO III</h1>

    // </div>
    // `
    // desc.style.display = 'none';
}



function linK(){
    var lin = document.getElementById('link') /*variavel responsavel por fazer ligacao com area a ser enserida os links de download */
    lin.innerHTML = `
    <li><a target="_blank" href="download/index.txt" title="HyperText Markup Language" style="color: #232399" download="txt/txt">Download HTML Index</a></li>
    <li><a target="_blank" href="download/projeto.txt" title="HyperText Markup Language" style="color: #232399 download="txt/txt">Download HTML Pag.Projeto</a></li>
    <li><a target="_blank" href="download/style.css" title="Cascading Style Sheets" style="color: #232399 download="txt/css">Download CSS</a></li>
    <li><a target="_blank" href="download/links.js" title="JavaScript" style="color: #232399 download="application/ecmascript">Download código JS</a></li> 
    `
}
/*funcao responsavel pelo envio envio das mensagens enserida nos a area de contato*/
function enviaR(){
    var mail = document.getElementById('email') /*variavel ligacao campo e-mail*/
    var no = document.getElementById('nomecontato') /*variavel ligacao campo nome*/
    var are = document.getElementById('texare') /*variavel ligacao dos dados enseridos no campo area texto*/

    let encremento = {primeiro:'Olá', rest:'sua mensagem foi enviada',nome:''} 
    encremento[nome] = no.value

    if(no.value != ''){
        alert(`${encremento.primeiro}, ${no.value} ${encremento.rest}`)/*alerta enviado de sinalizacao que mensagem foi enviada*/
    }else{
        alert('[ERRO], Dados incorretos tente novamente.') /*erro enviado se campo nome nao ser preenchido */
    }
}

/*funcao responsavel por gerar os links de download das imagens*/
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
