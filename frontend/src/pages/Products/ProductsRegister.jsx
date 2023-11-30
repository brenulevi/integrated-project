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
                    <h1 className="Profile-title">Cadastro de Produto</h1>
                </nav>
        </header>
        <main>
            <form action="">
                
            </form>
        </main>
        <footer id="footer"></footer>
        </div>
    );
}

export default ProductsRegister;