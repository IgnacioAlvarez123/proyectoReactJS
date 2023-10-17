import { useEffect, useState } from "react";
import data from "../productos.json";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])


    return (
        <>
            <div>
                {productos.length > 0 &&
                    <div>
                        <img src={productos[0].imagen} alt={productos[0].nombre} />
                        <h2>{productos[0].nombre}</h2>
                        <p>${productos[0].precio}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default ItemListContainer;
