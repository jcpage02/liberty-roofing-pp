import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {

    state = {
        username: '',
        password: '',
        isAdmin: false
    }

    

  render() {
    return (
      <div className="Login">
        <div className="login-box">
          <div className="login-selectors">
            <span>
              Username: <input type="text" />
            </span>
          </div>
          <div className="login-selectors">
            <span>
              Password: <input type="password" />
            </span>
          </div>
          <div className="login-selectors">
            <Link to='/admin/dash'>
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
