import React from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./ProductCard.css";
import Cookies from "js-cookie";

function ProductCard({ setId, setModel, setMaterial, setWeight, setEntryDate, setSoldDate, product }) {
    function handleEdit() {
        document.querySelector(".ProductsVisualize .edit").classList.add("show");
        setId(product.id);
        setModel(product.model);
        setMaterial(product.material);
        setWeight(product.weight);
        setEntryDate(product.entered);
        setSoldDate(product.sold);
    }

    function handleDelete() {
        const answer = window.confirm("Tem certeza de que deseja excluir esse produto?");
        if (!answer)
            return;

        try {
            const request = axios.delete(`http://localhost:3333/product/${product.id}`, { headers: { token: Cookies.get("token") } });
            request.then(response => {
                window.location.reload(false);
            })
        } catch (err) { console.log(err) }
    }

    return (
        <div className="Card">
            <div className="infos">
                <p className="id">{product.id}</p>
                <p className="model">{product.model}</p>
                <p className="material">{product.material}</p>
            </div>
            <div className="icons">
                <button onClick={() => handleEdit()}>
                    <i>
                        <FaEdit />
                    </i>
                </button>
                <button onClick={() => handleDelete()}>
                    <i>
                        <FaTrash />
                    </i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;