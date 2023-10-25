import Item from "./Item";

const ItemList = ({ productos, titulo }) => {
    return (

        <div >
            <h2 className="main-title">{titulo}</h2>

            <div className="card-container">
                {productos.map((prod) => <Item key={prod.id} producto={prod} />)}
            </div>
        </div>
    )
};

export default ItemList;
