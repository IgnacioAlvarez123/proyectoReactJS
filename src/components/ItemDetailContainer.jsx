import { useEffect, useState } from "react";
import { pedirItemPorId } from "../pedirProductos.js";
import  ItemDetail from "./ItemDetail.jsx"


const ItemDetailContainer = ({ itemId }) => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        pedirItemPorId(itemId)
            .then((res) => {
                setItem(res);
            })
    }, [itemId])

    return (

        <div >
            {item && <ItemDetail item={item} />}
        </div>
    )
};

export default ItemDetailContainer;