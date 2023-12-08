import { FaArrowLeft, FaCubes, FaWeightHanging, FaDollarSign } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import "./ProductsRegister.css"
import { useEffect } from "react";

function ProductsRegister() {

  useEffect(() => {
    document.forms[0].addEventListener("submit", event => {
      event.preventDefault();

      console.log("test");
    });
  }, [])


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
              <input type="text" id="model-input" name="model-input" />
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
            <label htmlFor="weight-input">Peso</label>
            <div className="input-section">
              <i>
                <FaWeightHanging className="icon" />
              </i>
              <input type="number" id="weight-input" />
            </div>
          </div>
          <div className="input">
            <label htmlFor="price-input">Preço</label>
            <div className="input-section">
              <i>
                <FaDollarSign className="icon" />
              </i>
              <input type="number" id="price-input" />
            </div>
          </div>

          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default ProductsRegister;