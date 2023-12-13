import { FaArrowLeft, FaEdit, FaCheck } from "react-icons/fa";
import { GiMetalBar } from "react-icons/gi";

import { verifyLogged } from "../../utils/utils";

import "./PricesTable.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function PricesTable() {
  const navigation = useNavigate();
  const [silver, setSilver] = useState();
  const [gold10k, setGold10k] = useState();
  const [gold18k, setGold18k] = useState();
  const [user, setUser] = useState();

  let infos = {
    "P": "",
    "G10": "",
    "G18": ""
  }

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

  useEffect(() => {
    try {
      const request = axios.get("http://localhost:3333/price/");
      request.then(response => {
        setGold10k(response.data[0].price);
        setGold18k(response.data[1].price);
        setSilver(response.data[2].price);
      }, { headers: { token: Cookies.get("token") } });
    } catch (err) {
      console.log(err)
    }
  }, [])

  function handleEdit(e) {
    const target = e.currentTarget.parentElement.getAttribute("input");
    const elementTarget = document.querySelector(`.PricesTable .form .input.${target}`);
    const elementInput = document.querySelector(`.PricesTable .form .input.${target} input`);
    infos[target] = elementInput.value;
    elementTarget.classList.remove("disabled");
    elementInput.removeAttribute("disabled");
  }

  function handleCheck(e) {
    const target = e.currentTarget.parentElement.getAttribute("input");
    const elementTarget = document.querySelector(`.PricesTable .form .input.${target}`);
    const elementInput = document.querySelector(`.PricesTable .form .input.${target} input`);
    elementTarget.classList.add("disabled");
    elementInput.setAttribute("disabled", "");

    if (elementInput.value === infos[target])
      return;

    try {
      axios.put("http://localhost:3333/price/edit", {
        material: target,
        price: elementInput.value
      }, { headers: { token: Cookies.get("token") } });
    } catch (err) { console.log(err) }
  }

  return (
    <div className="PricesTable">
      <header id="header">
        <nav>
          <a href="/dashboard">
            <i>
              <FaArrowLeft />
            </i>
          </a>
          <h1 className="Profile-title">Tabela de preços</h1>
        </nav>
      </header>
      <main>
        <h2 className="title">Valores por Material</h2>

        <div className="form">
          <form method="POST">

            <div className="input P disabled">
              <div className="label">
                <label htmlFor="P-input">P</label>
                {user && user.position === "Manager" ?                  
                <i input="P">
                  <button type="button" className="edit" onClick={(e) => handleEdit(e)}>
                    <FaEdit />
                  </button>
                  <button type="button" className="check" onClick={(e) => handleCheck(e)}>
                    <FaCheck />
                  </button>
                </i>
                : <></>}
              </div>
              <div className="input-section">
                <i>
                  <GiMetalBar className="icon" />
                </i>
                <input type="number"
                  id="P-input"
                  value={silver ? silver : ""}
                  onChange={event => setSilver(event.target.value)}
                  disabled
                />
              </div>
            </div>

            <div className="input G10 disabled">
              <div className="label">
                <label htmlFor="G10-input">G10</label>
                {user && user.position === "Manager" ?                  
                <i input="G10">
                  <button type="button" className="edit" onClick={(e) => handleEdit(e)}>
                    <FaEdit />
                  </button>
                  <button type="button" className="check" onClick={(e) => handleCheck(e)}>
                    <FaCheck />
                  </button>
                </i>
                : <></>}
              </div>
              <div className="input-section">
                <i>
                  <GiMetalBar className="icon" />
                </i>
                <input type="number"
                  id="G10-input"
                  value={gold10k ? gold10k : ""}
                  onChange={event => setGold10k(event.target.value)}
                  disabled
                />
              </div>
            </div>

            <div className="input G18 disabled">
              <div className="label">
                <label htmlFor="G18-input">G18</label>
                {user && user.position === "Manager" ?                  
                <i input="G18">
                  <button type="button" className="edit" onClick={(e) => handleEdit(e)}>
                    <FaEdit />
                  </button>
                  <button type="button" className="check" onClick={(e) => handleCheck(e)}>
                    <FaCheck />
                  </button>
                </i>
                : <></>}
              </div>
              <div className="input-section">
                <i>
                  <GiMetalBar className="icon" />
                </i>
                <input type="number"
                  id="G18-input"
                  value={gold18k ? gold18k : ""}
                  onChange={event => setGold18k(event.target.value)}
                  disabled
                />
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default PricesTable;