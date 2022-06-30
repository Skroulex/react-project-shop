import React, {useContext, useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import {Box, Pagination, Slider, TextField} from "@mui/material";
import {productsContext} from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import {useSearchParams} from "react-router-dom";

const ProductsList = () => {
    const {getProducts, products, deleteProducts, pages} = useContext(productsContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("q") ? searchParams.get("q") : "");

    const [currentPage, setCurrentPage] = useState(searchParams.get("_page") ? +searchParams.get("_page") : 1)

    const [price, setPrice] = useState([0, 10000])

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setSearchParams({
            q: search,
            _page: currentPage,
            _limit: 2,
            price_gte: price[0],
            price_lte: price[1],
        })
    }, [search, currentPage, price])

    useEffect(() => {
        getProducts()
    }, [searchParams]);

    return (
        <Container>
            <Box margin={"40px"}>
                <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    label="Search"
                    variant="outlined"/>
            </Box>
            <Slider transition={"1s"}
                    value={price}
                    onChange={(e, value) => {
                        setPrice(value)
                    }}
                    valueLabelDisplay="auto"
                    min={0}
                    max={10000}
                    step={1000}
            />
            <Box style={{display: 'flex'}}>
                {products.map(item => <ProductCard key={item.id} item={item} deleteProducts={deleteProducts}/>)}
            </Box>
            <Box>
                <Pagination onChange={(event, page) => setCurrentPage(page)} page={currentPage} color="secondary"
                            count={pages}/>
            </Box>
        </Container>
    );
};

export default ProductsList;
