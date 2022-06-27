import React, {useContext, useEffect} from 'react';
import {productsContext} from "../../contexts/productsContext";
import {useParams} from "react-router-dom";

const Details = () => {
    const {id} = useParams()
    const {oneProduct, getOneProduct} = useContext(productsContext);
    useEffect(() => {getOneProduct(id)},[])
    return (
        <div>
            details
        </div>
    );
};

export default Details;
