import { Link } from 'react-router-dom'
import style from '../styles/NavBar.module.css'

function NavBar(){
    return (

        <nav className={style.ettabs}>
            <div className={style.container}>
                <Link className={style.ethero}  to="/">Inicio</Link>
                <Link className={style.ethero} to="/Sobre">Sobre</Link>
                <Link className={style.ethero} to="/Projetos">Projetos</Link>
                <Link className={style.ethero} to="Contato">Contato</Link>
            </div>
        </nav>

    )
}

export default NavBar