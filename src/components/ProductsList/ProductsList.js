import React, {useContext, useEffect} from 'react';
import Container from "@mui/material/Container";
import {Box} from "@mui/material";
import {productsContext} from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
    const {getProducts,products,deleteProducts} = useContext(productsContext);
    useEffect(() =>{
        getProducts();
    },[]);
    return (
        <Container>
               <Box>
                   {products.map(item => <ProductCard key={item.id} item={item} deleteProducts={deleteProducts} />)}
               </Box>
        </Container>
    );
};

export default ProductsList;
