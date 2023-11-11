import { CartContext } from "../context/CartContext";
import ItemCount from "./itemCount";
import React, { useContext, useState } from 'react'

const ItemDetail = ({ item }) => {

    const { carrito, handleAgregar } = useContext(CartContext);



    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }





    return (
        <div className="card-description">
            <img className="card-image" src={item.imagen} alt={item.nombre} />
            <h3 className="card-title">{item.nombre} - ${item.precio}</h3>
            <p className="card-text">{item.descripcion}</p>
            <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => { handleAgregar(item, cantidad) }} />
        </div>
    )
}

export default ItemDetail;