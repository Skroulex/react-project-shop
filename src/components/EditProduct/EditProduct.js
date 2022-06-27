import React, {useState} from 'react';
import {Box, Container, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const EditProduct = () => {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    function handleSave() {
        const editedProduct = {
            title,
            price,
            description,
            image
        }
        console.log(editedProduct)
    }
    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Edit Product</Typography>
                <TextField
                    style={{marginTop:'20px'}}
                    label="Title" value={title} onChange={e => setTitle(e.target.value)} variant="outlined" />
                <TextField
                    style={{marginTop:'20px'}}
                    type="number" label="Price" value={price} onChange={e => setPrice(+e.target.value)} variant="outlined" />
                <TextField
                    style={{marginTop:'20px'}}
                    label="Description" value={description} onChange={e => setDescription(e.target.value)} variant="outlined" />
                <TextField
                    style={{marginTop:'20px'}}
                    label="Image" value={image} onChange={e => setImage(e.target.value)} variant="outlined" />
                <Button
                    style={{marginTop:'20px'}}
                    onClick={handleSave} variant="contained">Save</Button>
            </Box>
        </Container>
    );
};

export default EditProduct;
