import React from "react";

import "./Profile.css";

import {
  FaArrowLeft,
  //FaBriefcase,
  //FaEdit,
  //FaPhone,
  //FaUser,
} from "react-icons/fa";

function Profile() {
  return (
    <div className="Profile">
      <header id="header">
        <nav>
          <a href="#header">
            <i>
              <FaArrowLeft />
            </i>
          </a>
          <h1 className="Profile-title">Perfil</h1>
        </nav>
      </header>
      <main>
        <div className="welcome">
          <p>Bem vindo, undefined</p>
        </div>
        <div className="info">
          <form method="post"></form>
        </div>
      </main>
    </div>
  );
}

export default Profile;
