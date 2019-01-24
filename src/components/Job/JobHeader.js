import React from "react";
import "./JobHeader.scss";
import { Link } from "react-router-dom";
import logo from "../../LibertyRoofingLogo.png";

const JobHeader = () => (
  <div className="job-header">
    <div className="job-header-container">
      <Link to="/">
        <div className="job-logo">
          <img src={logo} />
        </div>
      </Link>
      <h3 className='job-title'>Jobs and Customers</h3>
      <div className="job-expand">
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
