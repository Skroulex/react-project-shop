import React, {useContext} from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography, Card} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {productsContext} from "../../contexts/productsContext";

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const {deleteProduct} = useContext(productsContext)
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Edit</Button>
                    <Button onClick={() => deleteProduct(item.id)} size="small">Delete</Button>
                    <Button onClick={() => navigate(`/details/${item.id}`)} size="small">Details</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
