import React, { Component } from "react";
import "./Job.css";
import { Link } from "react-router-dom";

class Job extends Component {

  render() {
    const { path } = this.props;

    return (
      <div className={path === "dash" ? "Job" : "Job-lg"}>
        <div className="job-header">
          <h5 className="job-title">Jobs and Customers</h5>
          <div className="job-expand">
            <Link to={path === "dash" ? "/admin/jobs" : "/admin/dash"}>
              <i class="fas fa-expand fa-lg" />
            </Link>
          </div>
        </div>
        <div className="job-table">
        </div>
      </div>
    );
  }
}

export default Job;
