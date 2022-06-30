import React, {useContext} from 'react';
import {Button, CardActions, CardContent, CardMedia, Typography, Card, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {productsContext} from "../../contexts/productsContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {cartContext} from "../../contexts/cartContext";


const ProductCard = ({item}) => {
    const {addToCart} = useContext(cartContext)
    const navigate = useNavigate()
    const {deleteProduct} = useContext(productsContext)
    return (
        <div style={{ margin:'0 10px'}}>
            <Card sx={{maxWidth: 345}}>
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
                    <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">Edit</Button>
                    <Button onClick={() => deleteProduct(item.id)} size="small">Delete</Button>
                    <Button onClick={() => navigate(`/details/${item.id}`)} size="small">Details</Button>
                    <IconButton onClick={()=> addToCart(item)}>
                        <AddShoppingCartIcon  color="primary" />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
