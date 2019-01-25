import React, { Component } from "react";
import "./JobTable.scss";
import axios from "axios";
import moment from "moment";
import { withRouter } from "react-router-dom";

class JobTable extends Component {
  state = {
    jobs: [],
    editable: false,
    addRow: false,
    numRows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  };

  componentDidMount() {
    axios.get("/active-jobs").then(res => this.setState({ jobs: res.data }));
  }

  handleEditable = () => {
    const { editable } = this.state;
    this.setState({ editable: !editable });
  };

  handleAddRow = () => {
    const { addRow } = this.state;
    this.setState({ addRow: !addRow });
  };

  render() {
    const { jobs, editable, addRow, numRows } = this.state;
    const {pathname} = this.props.location
    const jobTblContainer = pathname === "/admin/dash" ? "dash-jobTbl-container" : "jobTbl-container";
    const jobTbl = pathname === "/admin/dash" ? "dash-JobTable" : "JobTable";

    let keys = [];
    let values = [];

    const editSave = editable ? "far fa-save fa-sm" : "far fa-edit fa-sm";

    const headers = jobs.map((jobObj, i) => {
      if (i === 0) {
        keys.push(Object.keys(jobObj));
        let newKey = "";
        return keys[0].map(key => {
          key === "price"
            ? (newKey = "Price")
            : key === "date_sold"
            ? (newKey = "Date Sold")
            : key === "address"
            ? (newKey = "Address")
            : key === "city"
            ? (newKey = "City")
            : key === "state"
            ? (newKey = "State")
            : key === "zip"
            ? (newKey = "Zip")
            : key === "status"
            ? (newKey = "Status")
            : key === "ecd"
            ? (newKey = "ECD")
            : key === "customer_name"
            ? (newKey = "Customer Name")
            : key === "phone"
            ? (newKey = "Phone")
            : key === "email"
            ? (newKey = "Email")
            : key === "crew_name"
            ? (newKey = "Crew Name")
            : key === "crew_head"
            ? (newKey = "Crew Head")
            : key === "crew_phone"
            ? (newKey = "Crew Phone")
            : (newKey = key);
          if (newKey === "id") {
            return (
              <div
                className="far fa-plus-square fa-sm"
                onClick={() => {
                  this.handleAddRow();
                }}
              />
            );
          }
          return <div className="jobTbl-header">{newKey}</div>;
        });
      }
    });
    const rows = jobs.map((jobObj, i) => {
      values.push(Object.values(jobObj));

      return values[i].map((value, indx) => {
        let newValue = "";
        indx === 2
          ? (newValue = moment(value).format("MM/DD/YYYY"))
          : indx === 8
          ? (newValue = moment(value).format("MM/DD/YYYY"))
          : (newValue = value);
        if (indx === 0) {
          return (
            <div className="jobTbl-btns">
              <div className="far fa-trash-alt fa-sm" value={i} />
              <div
                className={editSave}
                value={i}
                onClick={() => this.handleEditable()}
              />
            </div>
          );
        }
        return <div className="jobTbl-item">{newValue}</div>;
      });
    });

    const rowAdd = addRow
      ? numRows.map((row, i) => {
          return i === 0 ? (
            <div className="jobTbl-save">
              <div className="far fa-save fa-sm" />
            </div>
          ) : (
            <div className="jobTbl-item" contentEditable="true" />
          );
        })
      : null;

    return (
      <div className={jobTbl}>
        <div className={jobTblContainer}>
          {headers}
          {rowAdd}
          {rows}
        </div>
      </div>
    );
  }
}

export default withRouter(JobTable);
