import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import ProductCard from "../../components/ProductCard";

import "./ProductsVisualize.css";

function ProductsVisualize() {
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
                    <ProductCard id="123456" model="Aliança" material="G18K" />
                </div>
            </main>
        </div>
    );
}

export default ProductsVisualize;