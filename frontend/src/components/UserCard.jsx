import React from "react";
// import axios from "axios";
import { FaEdit } from "react-icons/fa";

import "./UserCard.css";
// import Cookies from "js-cookie";

function UserCard({ setCpf, setName, setEmail, setUsername, user }) {
    function handleEdit() {
        document.querySelector(".Users .edit").classList.add("show");
        setCpf(user.cpf);
        setName(user.name);
        setEmail(user.email);
        setUsername(user.username);
    }

    // function handleDelete() {
    //     const answer = window.confirm("Tem certeza de que deseja excluir esse produto?");
    //     if (!answer)
    //         return;

    //     try {
    //         const request = axios.delete(`http://localhost:3333/user/${user.cpf}`, { headers: { token: Cookies.get("token") } });
    //         request.then(response => {
    //             window.location.reload(false);
    //         })
    //     } catch (err) { console.log(err) }
    // }

    return (
        <div className="UserCard">
            <div className="infos">
                <p className="name">{user.name}</p>
            </div>
            <div className="icons">
                <button onClick={() => handleEdit()}>
                    <i>
                        <FaEdit />
                    </i>
                </button>
                {/* <button onClick={() => handleDelete()}>
                    <i>
                        <FaTrash />
                    </i>
                </button> */}
            </div>
        </div>
    );
}

export default UserCard;