import React, { Component } from "react";
import "./Job.scss";
import JobHeader from "./JobHeader";
import JobTable from "./JobTable";
import { withRouter } from "react-router-dom";

class Job extends Component {
  render() {
    const {pathname} = this.props.location
    const job = pathname === "/admin/dash" ? "dash-job" : "Job";
    const jobContainer = pathname === "/admin/dash" ? "dash-job-container" : "job-container";
    return (
      <div className={job}>
        <div className={jobContainer}>
          <JobHeader />
          <JobTable />
        </div>
      </div>
    );
  }
}

export default withRouter(Job);
