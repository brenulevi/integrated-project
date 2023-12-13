import React from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaUserAlt, FaCalendarAlt, FaCubes } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import "./ServiceCard.css";
import Cookies from "js-cookie";

function ServiceCard({ setId, setStatus, setModel, setMaterial, setBudget, setEntryDate, setPromissedDate, setSoldDate, setDescr, setCpf, setName, service }) {

    function handleEdit() {
        document.querySelector(".ServicesVisualize .edit").classList.add("show");
        setId(service.id);
        setStatus(service.status);
        setModel(service.model);
        setMaterial(service.material);
        setBudget(service.budget);
        setEntryDate(service.entered);
        setPromissedDate(service.promissed);
        setSoldDate(service.sold);
        setDescr(service.descr);
        setCpf(service.cpf);
        setName(service.name);
    }

    function handleDelete() {
        const answer = window.confirm("Tem certeza de que deseja excluir esse serviço?");
        if (!answer)
            return;

        try {
            const request = axios.delete(`http://localhost:3333/service/${service.id}`, { headers: { token: Cookies.get("token") } });
            request.then(response => {
                window.location.reload(false);
            })
        } catch (err) { console.log(err) }
    }

    return (
        <div className="ServiceCard">
            <div className="idpart">
                <p className="id">{service.id}</p>
            </div>
            <div className="infos">
                <p className="name"><FaUserAlt className="icon"/>{service.name}</p>
                <p className="entered"><FaCalendarAlt className="icon"/>{service.entered.split('T')[0]}</p>
                <p className="model"><FaCubes  className="icon"/>{service.model}</p>
                <p className="material"><IoDiamond className="icon"/>{service.material}</p>
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

export default ServiceCard;