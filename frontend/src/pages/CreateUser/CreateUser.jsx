import React from "react";

import "./CreateUser.css";

import { FaArrowLeft, FaBriefcase, FaIdCard, FaLock, FaUser, FaUserEdit, FaUsers } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";

function CreateUser() {

    function handleSubmit(event) {
        event.preventDefault();

        const inputs = document.forms[0].elements;

        const request = axios.post("http://localhost:3333/user/register", {
            cpf: inputs[0].value,
            name: inputs[1].value,
            username: inputs[2].value,
            email: inputs[3].value,
            password: inputs[4].value,
            position: parseInt(inputs[5].value)
        }, { headers: { token: Cookies.get("token") } });

        request.then(response => {
            console.log(response);
            window.location.reload(false);
        }).catch(err => console.log(err));
    }

    return (
        <div className="CreateUser">
            <header id="header">
                <nav>
                    <button onClick={() => { window.location.href = "/users" }}>
                        <i>
                            <FaArrowLeft />
                        </i>
                    </button>
                    <h1 className="title">Cadastrar usuário</h1>
                </nav>
            </header>
            <main id="main">
                <form method="post" onSubmit={(event) => { handleSubmit(event) }}>
                    <div className="input-section">
                        <i className="cpf-icon">
                            <FaIdCard />
                        </i>
                        <input type="number" className="input" placeholder="CPF" required />
                    </div>
                    <div className="input-section">
                        <i className="name-icon">
                            <FaUser />
                        </i>
                        <input type="text" className="input" placeholder="Nome" required />
                    </div>
                    <div className="input-section">
                        <i className="username-icon">
                            <FaUserEdit />
                        </i>
                        <input type="text" className="input" placeholder="Nome de usuário" required />
                    </div>
                    <div className="input-section">
                        <i className="email-icon">
                            <FaBriefcase />
                        </i>
                        <input type="text" className="input" placeholder="Email" required />
                    </div>
                    <div className="input-section">
                        <i className="password-icon">
                            <FaLock />
                        </i>
                        <input type="password" className="input" placeholder="Senha" required />
                    </div>
                    <div className="input-section">
                        <i className="email-icon">
                            <FaUsers />
                        </i>
                        <select defaultValue="null" className="input" required>
                            <option value="null" disabled>Selecione um cargo</option>
                            <option value="0">Funcionário</option>
                            <option value="1">Gerente</option>
                        </select>
                    </div>

                    <button className="btn" type="submit">
                        Cadastrar
                    </button>
                </form>
            </main>
        </div>
    )
}

export default CreateUser;