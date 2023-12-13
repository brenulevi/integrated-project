import React from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaWeightHanging, FaCubes } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import "./ProductCard.css";
import Cookies from "js-cookie";

function ProductCard({ setId, setModel, setMaterial, setWeight, setEntryDate, setSoldDate, product }) {
    function handleEdit() {
        document.querySelector(".ProductsVisualize .edit").classList.add("show");
        setId(product.id);
        setModel(product.model);
        setMaterial(product.material);
        setWeight(product.weight);
        setEntryDate(product.entered.split("T")[0]);
        setSoldDate(product.sold ? product.sold.split("T")[0] : "");
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
            <div className="idpart">
                <p className="id">{product.id}</p>
            </div>
            <div className="infos">
                <p className="model"><FaCubes className="icon"/>{product.model}</p>
                <p className="material"><IoDiamond className="icon"/>{product.material}</p>
                <p className="weight"><FaWeightHanging className="icon"/>{product.weight} gr</p>
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