const Item = ({producto}) => {
    return (

        <div className="card">
            <img className="card-image" src={producto.imagen} alt={producto.nombre} />
            <h2 className="card-title">{producto.nombre} - ${producto.precio}</h2>
            <button className="btn">Ver Más</button>
        </div>
    )

};

export default Item;
