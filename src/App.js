import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";
import Header from "./components/Header/Header";
import "./App.css"

const App = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Header />
                <Routing />
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default App;
