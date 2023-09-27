import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <header className="header">
                <h1>Titulo</h1>
                <nav className="nav">
                    <a href="#">Menú</a>
                    <a href="#">Promos</a>
                    <a href="#">Sucursales</a>
                    <a href="#">Sobre Nosotros</a>
                </nav>
                <CartWidget></CartWidget>
            </header>


        </>
    )
}

export default NavBar
