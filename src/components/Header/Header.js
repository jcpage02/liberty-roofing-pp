import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../../LibertyRoofingLogo.png'

class Header extends Component {
  state = {};

  render() {
    const { home } = this.props;

    return (
      <div className="Header">
        <div className="header-header">
          <div className={home === "home" ? "header-home-logo" : "header-logo"}>
            <img src={logo} alt='logo'/>
          </div>
          <div
            className={home === "home" ? "header-home-navbar" : "header-navbar"}
          >
            <ul className="header-ul">
              <Link to="">
                <li className="header-li">Residential Services</li>
              </Link>
              <Link to="">
                <li className="header-li">Commercial Services</li>
              </Link>
              <Link to="">
                <li className="header-li">Storm Damage</li>
              </Link>
              <Link to="">
                <li className="header-li">About Us</li>
              </Link>
              <Link to="">
                <li className="header-li">Contact Us</li>
              </Link>
              <Link to="/customer/login">
                <li className="header-li">Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
