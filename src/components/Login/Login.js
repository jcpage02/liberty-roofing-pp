import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "@material-ui/core/Button";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isAdmin: false
  };

  handleChange = (prop, e) => {
    this.setState({
      [prop]: e
    });
  };

  login = async () => {
    const { username, password } = this.state;
    await axios
      .post("/api/login", { username, password })
      .then(res => {
        if (res.data.loggedIn) {
          this.props.history.push("/admin/dash");
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
    const buttonStyle = {
      background: "#2B2B2B",
      color: "white"
    };

    return (
      <div className="Login">
        <div className="login-box">
          <div className="login-selectors">
            <span>
              Username:{"  "}
              <input
                type="text"
                onChange={e => this.handleChange("username", e.target.value)}
              />
            </span>
          </div>
          <div className="login-selectors">
            <span>
              Password:{"  "}
              <input
                type="password"
                onChange={e => this.handleChange("password", e.target.value)}
              />
            </span>
          </div>
          <div className="login-selectors">
            <Button
              style={buttonStyle}
              variant="contained"
              color="primary"
              onClick={() => this.login()}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
