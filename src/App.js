import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";
import Header from "./components/Header/Header";
import "./App.css"
import CartContextProvider from "./contexts/cartContext";

const App = () => {
    return (
        <CartContextProvider>
            <ProductsContextProvider>
                <BrowserRouter>
                    <Header/>
                    <Routing/>
                </BrowserRouter>
            </ProductsContextProvider>
        </CartContextProvider>
    );
};

export default App;
