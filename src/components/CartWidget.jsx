import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <>
            <div className="hover-nav">
                <Link className="flex " to={"/carrito"}>
                    <img src="../img/carrito.png" alt="Carrito" className="list-image h-10 w-10" />
                    <span>{String(cantidadCarrito())}</span>

                </Link>
            </div>
        </>
    );
};

export default CartWidget;
