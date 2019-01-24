import React from "react";
import "./JobHeader.scss";
import { Link } from "react-router-dom";
import logo from "../../LibertyRoofingLogo.png";

const jobTitle = window.location.hash === "#/admin/dash" ? "dash-job-title" : "job-title"
const jobExpand = window.location.hash === "#/admin/dash" ? "dash-job-expand" : "job-expand"

const JobHeader = () => (
  <div className="job-header">
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

export default JobHeader;
