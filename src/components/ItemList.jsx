import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        
        <div >
            <h2 className="card-title">Productos</h2>

            <div className="card-container">
                {productos.map((prod) => <Item key={prod.id} producto={prod} />)}
            </div>
        </div>
    )
};

export default ItemList;
