import React, { Component } from "react";
import Header from "../Header/Header";
import "./AdminDash.css";
import Chart from "./Chart";

class AdminDash extends Component {
  render() {
    return (
      <div className="AdminDash">
        <Header />
        <div className="dash-body1">
          <div className="dash-body1-left">
            <div className="dash-jobs" />
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
