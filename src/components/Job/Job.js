import React, { Component } from "react";
import "./Job.css";
import { Link } from "react-router-dom";
import axios from "axios";
import JobTable from "../Tables/JobTable";

class Job extends Component {
  state = {
    allJobs: [],
    keys: [],
  };

  componentDidMount() {
    let keys = [];
    axios.get("/api/active-jobs").then(res => {
      console.log(res.data);
      keys = Object.keys(res.data[0]);

      this.setState({
        allJobs: res.data,
        keys
      });
    });
  }

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
          <JobTable />
        </div>
      </div>
    );
  }
}

export default Job;
