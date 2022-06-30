import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../Loader/Loader";
import {productsContext} from "../../contexts/productsContext";

const EditProduct = () => {
    const {getOneProduct, oneProduct, updateProduct, getProducts} = useContext(productsContext);
    const navigate = useNavigate()
    const {id} = useParams();

    // title, price, description, image
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        getOneProduct(id);
    }, []);
    useEffect(() => {
        if (oneProduct) {
            setTitle(oneProduct.title);
            setDescription(oneProduct.description);
            setPrice(oneProduct.price);
            setImage(oneProduct.image);
        }
    }, [oneProduct]);

    function handleSave() {
        const editedProduct = {
            title,
            description,
            price,
            image,
        };
        updateProduct(id, editedProduct)
        getProducts()
        navigate('/products')
    }

    return oneProduct ? (
        <Container maxWidth="sm">
            <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
                <Typography variant="h5">Edit product</Typography>
                <TextField
                    style={{marginTop: "20px"}}
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <TextField
                    style={{marginTop: "20px"}}
                    type={"number"}
                    label="Price"
                    variant="outlined"
                    value={price}
                    onChange={e => setPrice(+e.target.value)}
                />
                <TextField
                    style={{marginTop: "20px"}}
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <TextField
                    style={{marginTop: "20px"}}
                    label="Image"
                    variant="outlined"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <Button onClick={handleSave} variant="outlined" color="primary">
                    Save
                </Button>
            </Box>
        </Container>
    ) : (
        <Loader/>
    );
};

export default EditProduct;
