
const ItemDetail = ({ item }) => {
    return (
        <div className="card-description">
            <img className="card-image" src={item.imagen} alt={item.nombre} />
            <h3 className="card-title">{item.nombre} - ${item.precio}</h3>
            <p className="card-text">{item.descripcion}</p>
            <button className="btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail;