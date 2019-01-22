import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import Swal from "sweetalert2";

class CustLogin extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (prop, e) => {
    this.setState({
      [prop]: e
    });
  };

  login = async () => {
    const { username, password } = this.state;
    await axios
      .post("/cust/login", { username, password })
      .then(res => {
        if (res.data.loggedIn) {
          this.props.history.push("/customer/dash");
        }
      })
      .catch(err =>
        Swal({
          type: "error",
          title: "Oops...",
          text: "Incorrect Username or Password",
          footer: "<a href>Why do I have this issue?</a>"
        })
      );
  };

  render() {
    return (
      <div className="Login">
        <div className="login-background" />
        <div className="login-container">
          <div className="login-box">
            <h5>Welcome!</h5>
            <div className="login-selectors">
              <h5>Username:</h5>
              <input
                type="text"
                onChange={e => this.handleChange("username", e.target.value)}
              />
            </div>
            <div className="login-selectors">
              <h5>Password:</h5>
              <input
                type="password"
                onChange={e => this.handleChange("password", e.target.value)}
              />
            </div>
            <div className="login-selectors">
              <button onClick={() => this.login()}>Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustLogin;