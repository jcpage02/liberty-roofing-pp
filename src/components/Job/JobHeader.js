import React, { Component } from "react";
import "./JobHeader.scss";
import { Link, withRouter } from "react-router-dom";
import logo from "../../LibertyRoofingLogo.png";

class JobHeader extends Component {
  render() {
    const { pathname } = this.props.location;
    const jobTitle = pathname === "/admin/dash" ? "dash-job-title" : "job-title";
    const jobExpand = pathname === "/admin/dash" ? "dash-job-expand" : "job-expand";
    const jobHeader = pathname === "/admin/dash" ? "dash-job-header" : "job-header";
    const jobHdrContainer = pathname === "/admin/dash" ? "dash-job-header-container" : "job-header-container";
    const jobHeaderLogo = pathname === "/admin/dash" ? "dash-job-header-logo" : "job-header-logo";

    return (
      <div className={jobHeader}>
        <div className={jobHdrContainer}>
          <Link to="/">
            <div className={jobHeaderLogo}>
              <img src={logo} alt='logo'/>
            </div>
          </Link>
          <h3 className={jobTitle}>Jobs and Customers</h3>
          <div className={jobExpand}>
            <Link
              to={
                window.location.hash === "#/admin/dash"
                  ? "/admin/jobs"
                  : "/admin/dash"
              }
            >
              <i className="fas fa-expand fa-lg" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(JobHeader);
