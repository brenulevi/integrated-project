import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { verifyLogged } from "../../utils/utils";

import "./Profile.css";

import {
  FaArrowLeft, FaBriefcase, FaCheck, FaEdit, FaUser, FaUserCircle, FaUsers
} from "react-icons/fa";

import ManagerUserButton from "../../components/ManagerUserButton";

let infos = {
  name: "",
  email: ""
}

function Profile() {
  const navigation = useNavigate();
  const [user, setUser] = useState();
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();

  useEffect(() => {
    if (!verifyLogged()) {
      navigation("/");
      return;
    }
    try {
      const request = axios.get("http://localhost:3333/user/me", { headers: { token: Cookies.get("token") } });
      request.then(response => {
        setUser(response.data);
        setNameInput(response.data.name);
        setEmailInput(response.data.email);
      });
    } catch (err) {
      navigation("/");
    }
  }, [navigation]);

  function handleEdit(e) {
    const target = e.currentTarget.parentElement.getAttribute("input");
    const elementTarget = document.querySelector(`.Profile .form .input-form.${target}`);
    const elementInput = document.querySelector(`.Profile .form .input-form.${target} input`);
    infos[target] = elementInput.value;
    elementTarget.classList.remove("disabled");
    elementInput.removeAttribute("disabled");
  }

  function handleCheck(e) {
    const target = e.currentTarget.parentElement.getAttribute("input");
    const elementTarget = document.querySelector(`.Profile .form .input-form.${target}`);
    const elementInput = document.querySelector(`.Profile .form .input-form.${target} input`);
    elementTarget.classList.add("disabled");
    elementInput.setAttribute("disabled", "");

    if (elementInput.value === infos[target])
      return;

    try {
      axios.put("http://localhost:3333/user/", {
        key: target,
        value: elementInput.value
      }, { headers: { token: Cookies.get("token") } });
    } catch (err) { console.log(err) }
  }

  return (
    <div className="Profile">
      <header id="header">
        <nav>
          <a href="/dashboard">
            <i>
              <FaArrowLeft />
            </i>
          </a>
          <h1 className="title">Perfil</h1>
        </nav>
      </header>
      <main id="main">
        <div className="welcome">
          <p>Bem vindo, {user ? user.username : ""}!</p>
        </div>
        <div className="info">
          <div className="img">
            <i>
              <FaUserCircle className="user-icon" />
            </i>
          </div>
          <div className="form">
            <form method="post">
              <div className="input-form name disabled">
                <div className="label">
                  <label htmlFor="nameInput">Nome</label>
                  <i input="name">
                    <button type="button" className="edit" onClick={(e) => handleEdit(e)}>
                      <FaEdit />
                    </button>
                    <button type="button" className="check" onClick={(e) => handleCheck(e)}>
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
                    onChange={event => setNameInput(event.target.value)} />
                </div>
              </div>
              <div className="input-form role disabled">
                <div className="label">
                  <label htmlFor="positionInput">Cargo</label>
                </div>
                <div className="input">
                  <i>
                    <FaUsers />
                  </i>
                  <input type="text" name="positionInput" id="positionInput" disabled value={user ? user.position : ""} />
                </div>
              </div>

              <div className="input-form email disabled">
                <div className="label">
                  <label htmlFor="emailInput">Email</label>
                  <i input="email">
                    <button type="button" className="edit" onClick={(e) => handleEdit(e)}>
                      <FaEdit />
                    </button>
                    <button type="button" className="check" onClick={(e) => handleCheck(e)}>
                      <FaCheck />
                    </button>
                  </i>
                </div>
                <div className="input">
                  <i>
                    <FaBriefcase />
                  </i>
                  <input
                    type="email"
                    name="emailInput"
                    id="emailInput"
                    disabled
                    value={emailInput ? emailInput : ""}
                    onChange={event => setEmailInput(event.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Manage employees (only for managers) */}
        <div className="manager-button">
          {user && user.position === "Manager" ? <ManagerUserButton /> : <></>}
        </div>
      </main>
      <footer id="footer">
      </footer>
    </div>
  );
}

export default Profile;
