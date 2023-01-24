import style from '../styles/NavBar.module.css'
import { Link } from "react-scroll";


function NavBar(props){

    document.addEventListener('scroll', ()=>{
        var elem = document.getElementById('NavBar')
        var cord = elem.getBoundingClientRect();

        if (cord['bottom'] < 76){
            var tag = document.getElementById('NavBar')

            tag.style.position = 'fixed';
            tag.style.removeProperty('bottom');
            tag.style.top = 0;
        }
    });

    document.addEventListener('scroll', ()=>{
        var elem = document.getElementById('Home')
        var cord = elem.getBoundingClientRect();

        var cordenad =  893.03125
        if (cord['bottom'] > cordenad ){
            var tag = document.getElementById('NavBar')

            tag.style.position = 'absolute';
            tag.style.removeProperty('top');
            tag.style.buttom = 0;
        }
    });

    document.addEventListener("scroll", ()=>{

        var elem0 = document.getElementById('Inicio');
        var elem1 = document.getElementById('About');
        var elem2 = document.getElementById('Project');
        var elem3 = document.getElementById('Contat');

        var trocaElement1 = document.getElementById('t1')
        var trocaElement2 = document.getElementById('t2')

        var cord0 = elem0.getBoundingClientRect();
        var cord1 = elem1.getBoundingClientRect();
        var cord2 = elem2.getBoundingClientRect();
        var cord3 = elem3.getBoundingClientRect();

        if (cord0['bottom'] > 736){

            elem0.style.borderBottom = '5px solid green'
        };        

        if (cord1['bottom'] < 1310){

            var trocar = document.getElementById('t1');
            trocar.style.borderBottom = '5px solid green';
            elem0.style.borderBottom = 'none';

        }else{

            var troc3 = document.getElementById('t1');
            troc3.style.borderBottom = 'none';
            elem0.style.borderBottom = '5px solid green'

        };

        if (cord2['bottom'] < 1250){

            var troca = document.getElementById('t2');
            troca.style.borderBottom = '5px solid green';
            trocaElement1.style.borderBottom = 'none'

        }else{

            var troc = document.getElementById('t2');
            troc.style.borderBottom = 'none';
        };

        if (cord3['bottom'] < 1200){

            var troc2 = document.getElementById('Contac');
            troc2.style.borderBottom = '5px solid green';
            trocaElement2.style.borderBottom = 'none'

        }else{

            var troc1 = document.getElementById('Contac');
            troc1.style.borderBottom = 'none';
            
        };

    });

    return (
        <nav className={style.ettabs}>
            <h1>WENNED SILVA</h1>
            <div className={style.container} id="NavBar">
                    <Link className={style.ethero} id="Inicio" to="Home" spy={true} smooth={true} offset={-70} duration={500}>Inicio</Link>
                    <Link className={style.ethero} id="t1" to="Sobre" spy={true} smooth={true} offset={-70} duration={500}>Sobre</Link>
                    <Link className={style.ethero} id="t2" to="Projetos" spy={true} smooth={true} offset={-70} duration={500}>Projetos</Link>
                    <Link className={style.ethero} id="Contac" to="Contato" spy={true} smooth={true} offset={-70} duration={500}>Contato</Link> 
            </div>
        </nav>

    )
}

export default NavBar