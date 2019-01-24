import React, { Component } from "react";
import "./Job.scss";
import JobHeader from './JobHeader'
import { Link } from "react-router-dom";

class Job extends Component {
  constructor(props){super(props)}
  render() {
    return (
      <div className="Job">
        <div className="job-container">
          <JobHeader />
        </div>
      </div>
    );
  }
}

export default Job;
