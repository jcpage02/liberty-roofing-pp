import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminDash.scss";
import Job from "../Job/Job";
import Appointments from "../Appointment/Appoinment";
import logo from "../../LibertyRoofingLogo.png";

class AdminDash extends Component {
  render() {
    return (
      <div className="AdminDash">
        <div className="admin-dash-container">
          <div className="admin-dash-header">
            <Link to="/">
              <div className="adminDash-logo">
                <img src={logo} alt='logo'/>
              </div>
            </Link>
            <h4>Admin Dashboard</h4>
            <div className='adminDash-back'>
              <a href={process.env.REACT_APP_EMP_LOGIN}>
                <i className="fas fa-sign-out-alt fa-2x" />
              </a>
            </div>
          </div>
          <div className="dash-body">
            <div className="dash-body1">
              <div className="dash-body1-left">
                <Job />
                <Appointments className="dash-apts" />
              </div>
              <div className="dash-body1-right" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDash;
