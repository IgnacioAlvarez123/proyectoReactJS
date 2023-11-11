import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='backround'>
            <h2 className='main-title'>Carrito</h2>

            {
                carrito.map((prod) => (
                    <div key={prod.id }>
                        <br />
                        <h3 className='card-title'>{prod.nombre}</h3>
                        <p className='card-title'>Precio por producto: ${prod.precio}</p>
                        <p className='card-title'>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p className='card-title'>Cantidad: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }
            {carrito.length > 0 ?
                <>
                    <h4 className='card-title'>Precio total: ${precioTotal()}</h4>
                    <button onClick={handleVaciar} className='btn'>Vaciar carrito</button>
                </> :
                <h4 className='card-title'>El carrito esta vacío </h4>

            }
        </div>
    )
}

export default Carrito;
