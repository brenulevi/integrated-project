import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./ProductCard.css";

function ProductCard({ id, model, material }) {
    return (
        <div className="Card">
            <div className="infos">
                <p className="id">{id}</p>
                <p className="model">{model}</p>
                <p className="material">{material}</p>
            </div>
            <div className="icons">
                <i>
                    <FaEdit />
                </i>
                <i>
                    <FaTrash />
                </i>
            </div>
        </div>
    );
}

export default ProductCard;