import { useEffect, useState } from "react";
import pedirProductos from "../pedirProductos.js"
import ItemList from "./itemList.jsx";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])


    return (

        <div>
            <ItemList productos={productos}/>
        </div>
    )
};

export default ItemListContainer;
