
const ItemDetail = ({ item }) => {
    return (
        <div className="card">
            <img className="card-image" src={item.imagen} alt={item.nombre} />
            <h3 className="card-title">{item.nombre} - ${item.precio}</h3>
        </div>
    )
}

export default ItemDetail;