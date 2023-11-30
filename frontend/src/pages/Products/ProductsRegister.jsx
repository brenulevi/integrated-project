import { FaArrowLeft } from "react-icons/fa";
import "./ProductsRegister.css"

function ProductsRegister() {
    return(
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
            <h2 style={{paddingBottom:"1rem"}}>Informações da peça</h2>
            <form action="">
                <label for="model">Modelo:</label>
                <input type="text" id="model"/>
                <label for="materialdiv">Material:</label>
                <div id="materialdiv" className="radio-div" style={{paddingTop:"0.5rem"}}>
                    <input type="radio" id="prata"/>
                    <label className="radio-labels"for="ouro18">Prata</label>
                    <input type="radio" id="ouro10"/> 
                    <label className="radio-labels"for="ouro10">Ouro 10k</label>
                    <input type="radio" id="ouro18"/>
                    <label className="radio-labels"for="ouro18">Ouro 18k</label>
                </div>
                <label for="weight">Peso:</label>
                <input type="number" id="weight"/>
                <label for="price">Valor:</label>
                <input type="number" id="price"/>
                <label for="model">Data de entrada:</label>
                <input type="date" id="model"/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </main>
        <footer id="footer"></footer>
        </div>
    );
}

export default ProductsRegister;