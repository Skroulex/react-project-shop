import React, {useContext, useState} from 'react';
import {Box, Container, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {productsContext} from "../../contexts/productsContext";
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
    const {createProduct} = useContext(productsContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    function handleSave() {
        const newProduct = {
            title,
            price,
            description,
            image
        }
        if (!title.trim() || !price || !description.trim() || !image.trim()) {
            alert("Заполните поля!")
        } else {
            createProduct(newProduct);
            navigate("/products")
        }
    }

    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Add Product</Typography>
                <TextField
                    style={{marginTop: '20px'}}
                    label="Title" value={title} onChange={e => setTitle(e.target.value)} variant="outlined"/>
                <TextField
                    style={{marginTop: '20px'}}
                    type="number" label="Price" value={price} onChange={e => setPrice(+e.target.value)}
                    variant="outlined"/>
                <TextField
                    style={{marginTop: '20px'}}
                    label="Description" value={description} onChange={e => setDescription(e.target.value)}
                    variant="outlined"/>
                <TextField
                    style={{marginTop: '20px'}}
                    label="Image" value={image} onChange={e => setImage(e.target.value)} variant="outlined"/>
                <Button
                    style={{marginTop: '20px'}}
                    onClick={handleSave} variant="contained">Save</Button>
            </Box>
        </Container>
    );
};

export default AddProduct;
