import { FaArrowLeft} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GiMetalBar } from "react-icons/gi";

import "./PricesTable.css"
import { useEffect } from "react";

function PricesTable() {

  useEffect(() => {
    document.forms[0].addEventListener("submit", event => {
      event.preventDefault();

      console.log(event);
    });
  }, []);


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
        <form method="POST">
        <div className="input">
            <label htmlFor="silver-input">Prata</label>
            <div className="input-section">
              <i>
                <GiMetalBar className="icon" />
              </i>
              <input type="number" id="silver-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="10kgold-input">Ouro 10</label>
            <div className="input-section">
              <i>
                <GiMetalBar className="icon" />
              </i>
              <input type="number" id="10kgold-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="18kgold-input">Ouro 18</label>
            <div className="input-section">
              <i>
                <GiMetalBar className="icon" />
              </i>
              <input type="number" id="18kgold-input" />
            </div>
          </div>
          <button type="submit" className="btn">Alterar</button>
        </form>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default PricesTable;