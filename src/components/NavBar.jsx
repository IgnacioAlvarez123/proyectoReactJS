import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header className="header">
                <Link to="/">
                    <h1 className="card-title">Titulo</h1>
                </Link>
                <nav className="nav">
                    <li><Link to="/Menu" >Menú</Link></li>
                    <li><Link to="/Menu/Hamburguesas">Hamburguesas</Link></li>
                    <li><Link to="/Menu/Gaseosas">Gaseosas</Link></li>
                    <li><Link to="/menu/Guarnicion">Guarniciones</Link></li>
                </nav>
                <CartWidget></CartWidget>
            </header>


        </>
    )
}

export default NavBar
