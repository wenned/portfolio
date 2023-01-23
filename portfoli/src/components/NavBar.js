import style from '../styles/NavBar.module.css'
import { Link } from "react-scroll";


function NavBar(){

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