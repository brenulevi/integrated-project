import { FaArrowLeft, FaCubes, FaWeightHanging, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

import "./ServicesRegister.css"
import { useEffect } from "react";
import axios from "axios";
import { verifyLogged } from "../../utils/utils";
import Cookies from "js-cookie";

let clients = [];

async function getClients() {
  const request = axios.get("http://localhost:3333/client", { headers: { token: Cookies.get("token") } });
  request.then(response => {
    clients = response.data;
  }).catch(err => window.location.href = "/");
}

if (window.location.href === "http://localhost:3000/services/register")
  await getClients();

function ServicesRegister() {

  useEffect(() => {
    if (!verifyLogged()) {
      window.location.href = "/";
      return;
    }
  }, []);

  function handleSubmit() {
    try {
      const request = axios.post("http://localhost:3333/service/", {
        model: document.forms[0].elements[1].value,
        material: document.forms[0].elements[2].value,
        budget: parseFloat(document.forms[0].elements[3].value),
        entryDate: (document.forms[0].elements[5].value),
        cpf: document.forms[0].elements[0].value,
        promissedDate: (document.forms[0].elements[6].value ? (document.forms[0].elements[6].value) : null),
        descr: (document.forms[0].elements[4].value ? document.forms[0].elements[4].value : null),
      }, { headers: { token: Cookies.get("token") } });
      request.then(response => window.location.reload(false));
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
            <label htmlFor="cpf-input">Cliente (CPF)</label>
            <div className="input-section">
              <i>
                <IoPerson className="icon" />
              </i>
              <select defaultValue="null" type="number" id="cpf-input" required >
                <option value="null">Selecione um cliente</option>
                {clients.map(client => {
                  return <option key={client.cpf} value={client.cpf}>{client.cpf}</option>
                })}
              </select>
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
            <label htmlFor="budget-input">Orçamento</label>
            <div className="input-section">
              <i>
                <FaDollarSign className="icon" />
              </i>
              <input type="number" step="0.01" id="budget-input" required />
            </div>
          </div>

          <div className="input">
            <label htmlFor="descr-input">Descrição</label>
            <div className="input-section">
              <i>
                <FiFileText className="icon" />
              </i>
              <textarea type="text" rows="3" spellCheck="false" id="descr-input" required />
            </div>
          </div>

          <div className="input">
            <label htmlFor="entryDate-input">Data de Entrada</label>
            <div className="input-section">
              <i>
                <FaCalendarAlt className="icon" />
              </i>
              <input type="date" id="entryDate-input" required />
            </div>
          </div>

          <div className="input">
            <label htmlFor="promisseDate-input">Data de Promessa</label>
            <div className="input-section">
              <i>
                <FaCalendarAlt className="icon" />
              </i>
              <input type="date" id="promisseDate-input" required />
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