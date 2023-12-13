import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./Login.css";

import { FaUser, FaLock } from "react-icons/fa";

import logo from "../../images/logo.png";

function Login() {
  document.title = "Login - DJK Joias";

  const navigation = useNavigate();

  function submitLogin(event) {
    event.preventDefault();

    const form = document.forms[0];

    axios.post("http://localhost:3333/user/login", {
      username: form.elements[0].value,
      password: form.elements[1].value
    }).then((response) => {
      Cookies.set("token", response.data.token, { sameSite: "Lax" });
      navigation("/dashboard");
    }).catch(err => {
      alert(err.response);
    });
  }

  return (
    <div className="Login">
      <header id="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main id="main">
        <div className="form">
          <form method="post" onSubmit={(event) => submitLogin(event)}>
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