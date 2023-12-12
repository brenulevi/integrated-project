import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { FaArrowLeft, FaBriefcase, FaCheck, FaEdit, FaIdCard, FaUser } from "react-icons/fa";

import UserCard from "../../components/UserCard";

import "./Users.css";

let users = [];
let infos = {
    cpf: "",
    name: "",
    email: "",
    username: ""
}

async function handleLoad() {
    try {
        const response = await axios.get("http://localhost:3333/user/", { headers: { token: Cookies.get("token") } });
        users = response.data;
    } catch (err) { console.log(err) }
}
await handleLoad();

function Users() {
    const [cpfInput, setCpfInput] = useState();
    const [nameInput, setNameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [usernameInput, setUsernameInput] = useState();

    function handleClose() {
        document.querySelector(".Users .edit").classList.remove("show");
    }

    function handleEdit(e) {
        const target = e.currentTarget.parentElement.getAttribute("input");
        const elementTarget = document.querySelector(`.Users .form .input-form.${target}`);
        const elementInput = document.querySelector(`.Users .form .input-form.${target} input`);
        infos[target] = elementInput.value;
        elementTarget.classList.remove("disabled");
        elementInput.removeAttribute("disabled");
    }

    function handleCheck(e) {
        const target = e.currentTarget.parentElement.getAttribute("input");
        const elementTarget = document.querySelector(`.Users .form .input-form.${target}`);
        const elementInput = document.querySelector(`.Users .form .input-form.${target} input`);
        elementTarget.classList.add("disabled");
        elementInput.setAttribute("disabled", "");

        if (elementInput.value === infos[target])
            return;

        try {
            const request = axios.put(`http://localhost:3333/user/${cpfInput}`, {
                key: target,
                value: elementInput.value
            }, {
                headers: { token: Cookies.get("token") }
            });
            request.then(async (response) => {
                window.location.reload(false);
            })
        } catch (err) { console.log(err) }
    }

    return (
        <div className="Users">
            <div className="edit">
                <button className="back" onClick={() => handleClose()}>
                    <i>
                        <FaArrowLeft />
                    </i>
                </button>
                <form className="form" method="post">
                    <div className="input-form cpf disabled">
                        <div className="label">
                            <label htmlFor="cpfInput">CPF</label>
                        </div>
                        <div className="input">
                            <i>
                                <FaIdCard />
                            </i>
                            <input
                                type="text"
                                name="cpfInput"
                                id="cpfInput"
                                disabled
                                value={cpfInput ? cpfInput : ""}
                            />
                        </div>
                    </div>
                    <div className="input-form name disabled">
                        <div className="label">
                            <label htmlFor="modelInput">Nome</label>
                            <i input="name">
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
                                <FaUser />
                            </i>
                            <input
                                type="text"
                                name="nameInput"
                                id="nameInput"
                                disabled
                                value={nameInput ? nameInput : ""}
                                onChange={event => setNameInput(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-form email disabled">
                        <div className="label">
                            <label htmlFor="emailInput">Email</label>
                            <i input="email">
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
                                <FaBriefcase />
                            </i>
                            <input
                                type="text"
                                name="emailInput"
                                id="emailInput"
                                disabled
                                value={emailInput ? emailInput : ""}
                                onChange={event => setEmailInput(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-form username disabled">
                        <div className="label">
                            <label htmlFor="usernameInput">Nome de usuário</label>
                            <i input="username">
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
                                <FaUser />
                            </i>
                            <input
                                type="text"
                                name="usernameInput"
                                id="usernameInput"
                                disabled
                                value={usernameInput ? usernameInput : ""}
                                onChange={event => setUsernameInput(event.target.value)}
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
                    <h1 className="title">Usuários</h1>
                </nav>
            </header>
            <main>
                <div className="cards">
                    {users.map(user => {
                        return <UserCard
                            setCpf={setCpfInput}
                            setName={setNameInput}
                            setEmail={setEmailInput}
                            setUsername={setUsernameInput}
                            key={user.cpf}
                            user={user} />
                    })}
                </div>
            </main>
        </div>
    );
}

export default Users;