import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import axios from "axios";
import "./AdminDash.scss";
import {updateIsLoggedIn} from '../../ducks/reducer'
import Job from "../Job/Job";
import Appointments from "../Appointment/Appoinment";
import Rep from '../Rep/Rep'
import logo from "../../LibertyRoofingLogo.png";

class AdminDash extends Component {

  state = {
    isLoggedIn: false
  }
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    // const {updateIsLoggedIn} = this.props
    return (
      <div className="AdminDash">
        <div className="admin-dash-container">
          <div className="admin-dash-header">
            <Link to="/">
              <div className="adminDash-logo">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <h4>Admin Dashboard</h4>
            <div className="adminDash-back">
              <Link to="/employee/login">
                <i className="fas fa-sign-out-alt fa-2x" />
              </Link>
            </div>
          </div>
          <div className="dash-body">
            <div className="dash-body1">
              <div className="dash-body1-left">
                <Job />
                <Appointments className="dash-apts" />
              </div>
              <div className="dash-body1-right"> 
                <Rep />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  const {isLoggedIn} = reduxState
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps, {updateIsLoggedIn})(AdminDash);
