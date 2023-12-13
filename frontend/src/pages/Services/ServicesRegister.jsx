import { FaArrowLeft, FaCubes, FaWeightHanging, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

import "./ServicesRegister.css"
import { useEffect } from "react";
import axios from "axios";
import { verifyLogged } from "../../utils/utils";

function ServicesRegister() {

  useEffect(() => {
    if (!verifyLogged()) {
      window.location.href = "/";
      return;
    }
  }, []);

  function handleSubmit() {
    try {
      console.log("aqui0");
      console.log(document.forms[0].elements);
      axios.post("http://localhost:3333/service/", {
        model: document.forms[0].elements[1].value,
        material: document.forms[0].elements[2].value,
        budget: parseFloat(document.forms[0].elements[3].value),
        entryDate: (document.forms[0].elements[5].value),
        cpf: document.forms[0].elements[0].value,
        promissedDate: (document.forms[0].elements[6].value ? (document.forms[0].elements[6].value) : null),
        descr: (document.forms[0].elements[4].value ? document.forms[0].elements[4].value : null),
      });
    } catch (err) { window.location.href = "/" }
  }


  return (
    <div className="ServicesRegister">
      <header id="header">
        <nav>
          <a href="/dashboard">
            <i>
              <FaArrowLeft />
            </i>
          </a>
          <h1 className="Profile-title">Registro de Serviço</h1>
        </nav>
      </header>
      <main>
        <h2 className="title">Informações do Serviço</h2>
        <form method="POST">

          <div className="input">
            <label htmlFor="weight-input">Cliente (CPF)</label>
            <div className="input-section">
              <i>
                <IoPerson className="icon" />
              </i>
              <input type="number" id="weight-input" required />
            </div>
          </div>

          <div className="input">
            <label htmlFor="model-input">Modelo</label>
            <div className="input-section">
              <i>
                <FaCubes className="icon" />
              </i>
              <select defaultValue="null" id="material-input" className="input" required>
                <option value="null" disabled>Selecione um modelo</option>
                <option value="alianca">Aliança</option>
                <option value="anel">Anel</option>
                <option value="pulseira">Pulseira</option>
                <option value="corrente">Corrente</option>
                <option value="pingente">Pingente</option>
                <option value="brinco">Brinco</option>
                <option value="outros">Outros</option>
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
                <option value="prata">Prata</option>
                <option value="ouro10">Ouro 10k</option>
                <option value="ouro18">Ouro 18k</option>
              </select>
            </div>
          </div>

          <div className="input">
            <label htmlFor="price-input">Orçamento</label>
            <div className="input-section">
              <i>
                <FaDollarSign className="icon" />
              </i>
              <input type="number" step="0.01" id="price-input" required />
            </div>
          </div>

          <div className="input">
            <label htmlFor="weight-input">Descrição</label>
            <div className="input-section">
              <i>
                <FiFileText className="icon" />
              </i>
              <textarea type="text" rows="3" spellCheck="false" id="descr-input" required />
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

          <div className="input">
            <label htmlFor="date-input">Data de Promessa</label>
            <div className="input-section">
              <i>
                <FaCalendarAlt className="icon" />
              </i>
              <input type="date" id="date-input" required />
            </div>
          </div>

          <button type="button" className="btn" onClick={handleSubmit}>Cadastrar</button>
        </form>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default ServicesRegister;