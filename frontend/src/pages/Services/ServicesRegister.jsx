import { FaArrowLeft, FaCubes, FaWeightHanging, FaDollarSign, FaCalendarAlt} from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

import "./ServicesRegister.css"
import { useEffect } from "react";

function ServicesRegister() {

  useEffect(() => {
    document.forms[0].addEventListener("submit", event => {
      event.preventDefault();

      console.log(event);
    });
  }, []);


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
              <input type="number" id="weight-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="model-input">Modelo</label>
            <div className="input-section">
              <i>
                <FaCubes className="icon" />
              </i>
              <select defaultValue="null" id="material-input" className="input">
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
              <select defaultValue="null" id="material-input" className="input">
                <option value="null" disabled>Selecione um material</option>
                <option value="prata">Prata</option>
                <option value="ouro10">Ouro 10k</option>
                <option value="ouro18">Ouro 18k</option>
              </select>
            </div>
          </div>
          <div className="input">
            <label htmlFor="weight-input">Peso esperado</label>
            <div className="input-section">
              <i>
                <FaWeightHanging className="icon" />
              </i>
              <input type="number" id="weight-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="price-input">Orçamento</label>
            <div className="input-section">
              <i>
                <FaDollarSign className="icon" />
              </i>
              <input type="number" id="price-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="weight-input">Descrição</label>
            <div className="input-section">
              <i>
                <FiFileText className="icon"/>
              </i>
              <textarea type="text" rows="3" spellCheck="false" id="descr-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="date-input">Data de Entrada</label>
            <div className="input-section">
              <i>
                <FaCalendarAlt className="icon"/>
              </i>
              <input type="date" id="date-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="date-input">Data de Promessa</label>
            <div className="input-section">
              <i>
                <FaCalendarAlt className="icon"/>
              </i>
              <input type="date" id="date-input" />
            </div>
          </div>
          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default ServicesRegister;