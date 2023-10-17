import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header className="header">
            <Link to="/">
                <h1>Titulo</h1>
            </Link>
                <nav className="nav">
                    {/* <a href="/Menu>Menú</a>"*/}
                    <Link to ="/Menu" >Menú</Link>
                    {/* <a href="/Promos>Promos</a>"*/}
                    <Link to ="/Promos">Promos</Link>
                    {/* <a href="/Sucursales>Sucursales</a>"*/}
                    <Link to ="/Sucursales">Sucursales</Link>
                    {/* <a href="/Sobre Nosotros>Sobre Nosotros</a>"*/}
                    <Link to ="/SobreNosotros">Sobre Nosotros</Link>
                </nav>
                <CartWidget></CartWidget>
            </header>


        </>
    )
}

export default NavBar
