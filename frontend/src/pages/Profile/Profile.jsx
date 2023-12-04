import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.css";

import {
  FaArrowLeft, FaEdit, FaUserCircle,
  //FaBriefcase,
  //FaEdit,
  //FaPhone,
  //FaUser,
} from "react-icons/fa";

function Profile() {

  const [name, setName] = useState("none");

  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("loggedUser")).name.split(" ");
    setName(name[0] + " " + name[name.length - 1]);
  }, [])

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
          <p>Bem vindo, {name}</p>
        </div>
        <div className="info">
          <div className="img">
            <i>
              <FaUserCircle className="user-icon" />
            </i>
          </div>
          <div className="form">
            <form method="post">
              <div className="input-form">
                <div className="label">
                  <label htmlFor="">Nome</label>
                  <FaEdit />
                </div>
                <input type="text" name="" id="" />
              </div>
              <div className="input-form">
                <div className="label">
                  <label htmlFor="">Cargo</label>
                  <FaEdit />
                </div>
                <input type="text" name="" id="" />
              </div>

              <div className="input-form">
                <div className="label">
                  <label htmlFor="">Telefone</label>
                  <FaEdit />
                </div>
                <input type="text" name="" id="" />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
