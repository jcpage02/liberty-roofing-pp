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

    return (
      <div className={jobHeader}>
        <div className="job-header-container">
          <Link to="/">
            <div className="job-logo">
              <img src={logo} />
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
