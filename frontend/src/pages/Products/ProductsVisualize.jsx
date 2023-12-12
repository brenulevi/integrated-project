import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { FaArrowLeft } from "react-icons/fa";

import ProductCard from "../../components/ProductCard";

import "./ProductsVisualize.css";

function ProductsVisualize() {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     try {
    //         const request = axios.get("http://localhost:3333/product/", { headers: { token: Cookies.get("token") } });
    //         request.then(response => {
    //             setProducts(response.data);
    //         });
    //     } catch (err) { console.log(err) }
    // }, [products]);

    return (
        <div className="ProductsVisualize">
            <header id="header">
                <nav>
                    <a href="/dashboard">
                        <i>
                            <FaArrowLeft />
                        </i>
                    </a>
                    <h1 className="title">Visualize peças</h1>
                </nav>
            </header>
            <main>
                <div className="cards">
                    {products ? products.map(product => {
                        <ProductCard id={product.id} model={product.model} material={product.material} />
                    }) : ""}
                </div>
            </main>
        </div>
    );
}

export default ProductsVisualize;