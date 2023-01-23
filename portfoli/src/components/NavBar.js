import style from '../styles/NavBar.module.css'
import { Link } from "react-scroll";


function NavBar(){

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



    return (
        <nav className={style.ettabs}>
            <h1>WENNED SILVA</h1>
            <div className={style.container} id="NavBar">
                    <Link className={style.ethero}  to="Home" spy={true} smooth={true} offset={-70} duration={500}>Inicio</Link>
                    <Link className={style.ethero} to="Sobre" spy={true} smooth={true} offset={-70} duration={500}>Sobre</Link>
                    <Link className={style.ethero} to="Projetos" spy={true} smooth={true} offset={-70} duration={500}>Projetos</Link>
                    <Link className={style.ethero} to="Contato" spy={true} smooth={true} offset={-70} duration={500}>Contato</Link> 
            </div>
        </nav>

    )
}

export default NavBar