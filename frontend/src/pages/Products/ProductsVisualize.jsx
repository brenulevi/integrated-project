import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { FaArrowLeft, FaCalendarAlt, FaCheck, FaCubes, FaEdit, FaIdCard, FaWeightHanging } from "react-icons/fa";

import ProductCard from "../../components/ProductCard";

import "./ProductsVisualize.css";
import { IoDiamond } from "react-icons/io5";
import { verifyLogged } from "../../utils/utils";

let products = [];
let infos = {
    model: "",
    material: "",
    weight: "",
    entered: "",
    sold: ""
}

async function handleLoad() {
    try {
        const response = await axios.get("http://localhost:3333/product/", { headers: { token: Cookies.get("token") } });
        products = response.data;
    } catch (err) { window.location.href = "/" }
}

if (window.location.href === "http://localhost:3000/products/visualize")
    await handleLoad();

function ProductsVisualize() {

    useEffect(() => {
        if (!verifyLogged()) {
            window.location.href = "/";
            return;
        }
    }, []);

    const [idInput, setIdInput] = useState();
    const [modelInput, setModelInput] = useState();
    const [materialInput, setMaterialInput] = useState();
    const [weightInput, setWeightInput] = useState();
    const [entryDateInput, setEntryDateInput] = useState();
    const [soldDateInput, setSoldDateInput] = useState();

    function handleClose() {
        document.querySelector(".ProductsVisualize .edit").classList.remove("show");
    }

    function handleEdit(e) {
        const target = e.currentTarget.parentElement.getAttribute("input");
        const elementTarget = document.querySelector(`.ProductsVisualize .form .input-form.${target}`);
        const elementInput = document.querySelector(`.ProductsVisualize .form .input-form.${target} input`);
        infos[target] = elementInput.value;
        elementTarget.classList.remove("disabled");
        elementInput.removeAttribute("disabled");
    }

    function handleCheck(e) {
        const target = e.currentTarget.parentElement.getAttribute("input");
        const elementTarget = document.querySelector(`.ProductsVisualize .form .input-form.${target}`);
        const elementInput = document.querySelector(`.ProductsVisualize .form .input-form.${target} input`);
        elementTarget.classList.add("disabled");
        elementInput.setAttribute("disabled", "");

        if (elementInput.value === infos[target])
            return;

        try {
            const request = axios.put(`http://localhost:3333/product/${idInput}`, {
                key: target,
                value: elementInput.value
            }, {
                headers: { token: Cookies.get("token") }
            });
            request.then(async (response) => {
                window.location.reload(false);
            })
        } catch (err) { window.location.href = "/" }
    }

    return (
        <div className="ProductsVisualize">
            <div className="edit">
                <button className="back" onClick={() => handleClose()}>
                    <i>
                        <FaArrowLeft />
                    </i>
                </button>
                <form className="form" method="post">
                    <div className="input-form id disabled">
                        <div className="label">
                            <label htmlFor="idInput">Id</label>
                        </div>
                        <div className="input">
                            <i>
                                <FaIdCard />
                            </i>
                            <input
                                type="text"
                                name="idInput"
                                id="idInput"
                                disabled
                                value={idInput ? idInput : ""}
                            />
                        </div>
                    </div>
                    <div className="input-form model disabled">
                        <div className="label">
                            <label htmlFor="modelInput">Modelo</label>
                            <i input="model">
                                <button type="button" className="editIcon" onClick={(e) => handleEdit(e)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="checkIcon" onClick={(e) => handleCheck(e)}>
                                    <FaCheck />
                                </button>
                            </i>
                        </div>
                        <div className="input">
                            <i>
                                <FaCubes />
                            </i>
                            <input
                                type="text"
                                name="modelInput"
                                id="modelInput"
                                disabled
                                value={modelInput ? modelInput : ""}
                                onChange={event => setModelInput(event.target.value)}

                            />
                        </div>
                    </div>
                    <div className="input-form material disabled">
                        <div className="label">
                            <label htmlFor="materialInput">Material</label>
                            <i input="material">
                                <button type="button" className="editIcon" onClick={(e) => handleEdit(e)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="checkIcon" onClick={(e) => handleCheck(e)}>
                                    <FaCheck />
                                </button>
                            </i>
                        </div>
                        <div className="input">
                            <i>
                                <IoDiamond />
                            </i>
                            <input
                                type="text"
                                name="materialInput"
                                id="materialInput"
                                disabled
                                value={materialInput ? materialInput : ""}
                                onChange={event => setMaterialInput(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-form weight disabled">
                        <div className="label">
                            <label htmlFor="weightInput">Peso</label>
                            <i input="weight">
                                <button type="button" className="editIcon" onClick={(e) => handleEdit(e)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="checkIcon" onClick={(e) => handleCheck(e)}>
                                    <FaCheck />
                                </button>
                            </i>
                        </div>
                        <div className="input">
                            <i>
                                <FaWeightHanging />
                            </i>
                            <input
                                type="number"
                                name="weightInput"
                                id="weightInput"
                                disabled
                                value={weightInput ? weightInput : ""}
                                onChange={event => setWeightInput(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-form entryDate disabled">
                        <div className="label">
                            <label htmlFor="entryInput">Data de entrada</label>
                            <i input="entryDate">
                                <button type="button" className="editIcon" onClick={(e) => handleEdit(e)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="checkIcon" onClick={(e) => handleCheck(e)}>
                                    <FaCheck />
                                </button>
                            </i>
                        </div>
                        <div className="input">
                            <i>
                                <FaCalendarAlt />
                            </i>
                            <input
                                type="date"
                                name="entryInput"
                                id="entryInput"
                                disabled
                                value={entryDateInput ? entryDateInput : ""}
                                onChange={event => setEntryDateInput(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-form soldDate disabled">
                        <div className="label">
                            <label htmlFor="soldInput">Data de venda</label>
                            <i input="soldDate">
                                <button type="button" className="editIcon" onClick={(e) => handleEdit(e)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="checkIcon" onClick={(e) => handleCheck(e)}>
                                    <FaCheck />
                                </button>
                            </i>
                        </div>
                        <div className="input">
                            <i>
                                <FaCalendarAlt />
                            </i>
                            <input
                                type="date"
                                name="soldInput"
                                id="soldInput"
                                disabled
                                value={soldDateInput ? soldDateInput : ""}
                                onChange={event => setSoldDateInput(event.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </div>
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
                    {products.map(product => {
                        return <ProductCard
                            setId={setIdInput}
                            setModel={setModelInput}
                            setMaterial={setMaterialInput}
                            setWeight={setWeightInput}
                            setEntryDate={setEntryDateInput}
                            setSoldDate={setSoldDateInput}
                            key={product.id}
                            product={product} />
                    })}
                </div>
            </main>
        </div>
    );
}

export default ProductsVisualize;