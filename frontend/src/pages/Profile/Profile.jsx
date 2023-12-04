import React, { useEffect, useState } from "react";

import "./Profile.css";

import {
  FaArrowLeft, FaBriefcase, FaEdit, FaPhone, FaUser, FaUserCircle
} from "react-icons/fa";

function Profile() {

  const [name, setName] = useState("none");

  useEffect(() => {
    const nameArr = JSON.parse(localStorage.getItem("loggedUser")).name.split(" ");
    setName(nameArr[0] + " " + nameArr[nameArr.length - 1]);

    document.querySelector(".Profile .info .input-form input").value = name;
  }, []);

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
      <main>
        <div className="welcome">
          <p>Bem vindo, {name}!</p>
        </div>
        <div className="info">
          <div className="img">
            <i>
              <FaUserCircle className="user-icon" />
            </i>
          </div>
          <div className="form">
            <form method="post">
              <div className="input-form disabled">
                <div className="label">
                  <label htmlFor="nameInput">Nome</label>
                  <FaEdit />
                </div>
                <div className="input">
                  <i>
                    <FaUser />
                  </i>
                  <input type="text" name="nameInput" id="nameInput" disabled />
                </div>
              </div>
              <div className="input-form disabled">
                <div className="label">
                  <label htmlFor="positionInput">Cargo</label>
                  <FaEdit />
                </div>
                <div className="input">
                  <i>
                    <FaBriefcase />
                  </i>
                  <input type="text" name="positionInput" id="positionInput" disabled />
                </div>
              </div>

              <div className="input-form disabled">
                <div className="label">
                  <label htmlFor="phoneInput">Telefone</label>
                  <FaEdit />
                </div>
                <div className="input">
                  <i>
                    <FaPhone />
                  </i>
                  <input type="text" name="phoneInput" id="phoneInput" disabled />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Manage employees (only for managers) */}
        { }
      </main>
      <footer id="footer">
      </footer>
    </div>
  );
}

export default Profile;
