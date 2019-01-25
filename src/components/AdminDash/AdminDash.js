import React, { Component } from "react";
import "./AdminDash.scss";
import Job from "../Job/Job";
import Appointments from "../Appointment/Appoinment";

class AdminDash extends Component {
  render() {
    return (
      <div className="AdminDash">
        <div className="admin-dash-container">
          <div className="admin-dash-header">
            <h4>Admin Dashboard</h4>
            <a href="http://localhost:3000/#/employee/login">
              <i className="fas fa-sign-out-alt fa-2x" />
            </a>
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
