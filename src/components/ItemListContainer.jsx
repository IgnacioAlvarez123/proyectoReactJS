import { useEffect, useState } from "react";
import pedirProductos from "../pedirProductos.js"
import ItemList from "./itemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Menú")
    const categoria = useParams().categoria;



    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Menú")
                }

            })
    }, [categoria])


    return (


        <ItemList productos={productos} titulo={titulo} />

    )
};

export default ItemListContainer;
