import "./Login.css";

import { FaUser, FaLock } from "react-icons/fa";

import logo from "../images/logo.png";

function Login() {
    document.title = "Login - DJK Joias";
    
  return (
    <div className="content">
      <header id="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main id="main">
        <div className="form">
          <form method="post">
            <h2>Login</h2>

            <div className="input-section">
              <i className="email-icon">
                <FaUser />
              </i>
              <input type="text" className="input" />
            </div>

            <div className="last-input">
              <div className="input-section">
                <i className="pass-icon">
                  <FaLock />
                </i>
                <input type="password" name="" id="" className="input" />
              </div>
              <small>
                <a id="forgot-pass" href="#forgot-pass">
                  Esqueci a senha
                </a>
              </small>
            </div>

            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="divider"></div>
      </main>

      <footer id="footer"></footer>
    </div>
  );
}

export default Login;
