import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { FaArrowLeft, FaCubes, FaWeightHanging, FaCalendarAlt } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import "./ProductsRegister.css"
import { useEffect } from "react";
import { verifyLogged } from "../../utils/utils";

function ProductsRegister() {

  useEffect(() => {
    if (!verifyLogged()) {
      window.location.href = "/";
      return;
    }
  }, []);

  function handleSubmit() {
    const inputs = document.forms[0].elements;

    try {
      const request = axios.post("http://localhost:3333/product/", {
        model: inputs[0].value,
        material: inputs[1].value,
        weight: inputs[2].value,
        entryDate: inputs[3].value
      }, { headers: { token: Cookies.get("token") } });
      request.then(response => {
        window.location.reload(false);
      });
    } catch (err) { window.location.href = "/" }
  }


  return (
    <div className="ProductsRegister">
      <header id="header">
        <nav>
          <a href="/dashboard">
            <i>
              <FaArrowLeft />
            </i>
          </a>
          <h1 className="Profile-title">Cadastro de Peça</h1>
        </nav>
      </header>
      <main>
        <h2 className="title">Informações da peça</h2>
        <form method="POST">
          <div className="input">
            <label htmlFor="model-input">Modelo</label>
            <div className="input-section">
              <i>
                <FaCubes className="icon" />
              </i>
              <select defaultValue="null" id="material-input" className="input" required>
                <option value="null" disabled>Selecione um modelo</option>
                <option value="Aliança">Aliança</option>
                <option value="Anel">Anel</option>
                <option value="Pulseira">Pulseira</option>
                <option value="Corrente">Corrente</option>
                <option value="Pingente">Pingente</option>
                <option value="Brinco">Brinco</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>
          <div className="input-form">
            <label htmlFor="material-input">Material</label>
            <div className="input-section">
              <i>
                <IoDiamond className="icon" />
              </i>
              <select defaultValue="null" id="material-input" className="input" required>
                <option value="null" disabled>Selecione um material</option>
                <option value="P">Prata</option>
                <option value="G10">Ouro 10k</option>
                <option value="G18">Ouro 18k</option>
              </select>
            </div>
          </div>
          <div className="input">
            <label htmlFor="weight-input">Peso</label>
            <div className="input-section">
              <i>
                <FaWeightHanging className="icon" />
              </i>
              <input type="number" id="weight-input" required />
            </div>
          </div>
          <div className="input">
            <label htmlFor="date-input">Data de Entrada</label>
            <div className="input-section">
              <i>
                <FaCalendarAlt className="icon" />
              </i>
              <input type="date" id="date-input" required />
            </div>
          </div>

          <button type="button" className="btn" onClick={() => handleSubmit()}>Cadastrar</button>
        </form>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default ProductsRegister;