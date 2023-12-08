import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { verifyLogged } from "../../utils/utils";

import "./Profile.css";

import {
  FaArrowLeft, FaBriefcase, FaEdit, FaPhone, FaUser, FaUserCircle
} from "react-icons/fa";
import ManagerUserButton from "../../components/ManagerUserButton";

function Profile() {
  const navigation = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    if (!verifyLogged()) {
      navigation("/");
      return;
    }
    try {
      const request = axios.get("http://localhost:3333/user/me", { headers: { token: Cookies.get("token") } });
      request.then(response => {
        setUser(response.data);
      });
    } catch (err) {
      navigation("/");
    }
  }, [navigation]);

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
              <div className="input-form disabled">
                <div className="label">
                  <label htmlFor="nameInput">Nome</label>
                  <FaEdit />
                </div>
                <div className="input">
                  <i>
                    <FaUser />
                  </i>
                  <input type="text" name="nameInput" id="nameInput" disabled value={user ? user.name : ""} />
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
                  <input type="text" name="positionInput" id="positionInput" disabled value={user ? user.position : ""} />
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
