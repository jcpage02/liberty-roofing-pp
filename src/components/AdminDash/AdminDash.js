import React, { Component } from "react";
import Header from "../Header/Header";
import "./AdminDash.css";
import Job from '../Job/Job'
import Chart from "./Chart";

class AdminDash extends Component {
  render() {
    return (
      <div className="AdminDash">
        <Header />
        <div className="dash-body1">
          <div className="dash-body1-left">
            <Job path='dash'/>
            <div className="dash-apts" />
          </div>
          <div className="dash-body1-right" />
        </div>
        <div className="dash-body2">
          <div className="dash-chart">
            <Chart />
          </div>
          <div className="dash-goals">Mini Board</div>
        </div>
      </div>
    );
  }
}

export default AdminDash;
