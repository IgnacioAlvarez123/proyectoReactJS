import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (

        <div className="card">
            <img className="card-image" src={producto.imagen} alt={producto.nombre} />
            <h2 className="card-title">{producto.nombre} - ${producto.precio}</h2>
            <button> <Link className="btn" to={`/item/${producto.id}`} >Ver Más </Link></button>
        </div>
    )

};

export default Item;
