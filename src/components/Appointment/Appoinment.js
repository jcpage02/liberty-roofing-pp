import React, { Component } from "react";
import axios from "axios";
import "./Appointment.css";
import Messanger from "./../Messanger/Messanger";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { isNumber } from "util";

class Appointments extends Component {
  state = {
    appointments: [],
    keys: [],
    values: [],
    selectedEmail: "",
    selectedPhone: ""
  };

  componentDidMount() {
    axios.get("/api/apts").then(res => {
      let keys = [];
      let values = [];
      res.data.map(array => {
        keys = Object.keys(array);
        values.push(Object.values(array));
      });
      this.setState({
        appointments: res.data,
        keys,
        values
      });
    });
  }

  handleSelector = (prop, e) => {
    this.setState({
      [prop]: e
    });
  };

  render() {
    const { keys, values } = this.state;
    // console.log(keys, values)
    const short = "here is the data";
    const medium = "here is even longer data";
    const long = "here is the longest data ever";

    const { pathname } = this.props.location;
    const dashApts =
      pathname === "/admin/dash" ? "Appointments" : "Appointments-lg";
    const dashAptsHdr =
      pathname === "/admin/dash" ? "dash-apt-header" : "apt-header";
    const dashAptsTitle =
      pathname === "/admin/dash" ? "dash-apt-title" : "apt-title";
    const dashMsgr = pathname === "/admin/dash" ? "dash-msgr" : "apt-msgr";
    const dashTbl = pathname === "/admin/dash" ? "dash-tbl" : "apt-tbl";
    const dashTblHeader =
      pathname === "/admin/dash" ? "dash-apt-tbl-header" : "apt-tbl-header";
    const dashTblCell =
      pathname === "/admin/dash" ? "dash-apt-tbl-cell" : "apt-tbl-cell";

    let columnNum = 0;
    let cell = "";
    const rowOne = values.map(array => {
      array.map((value, i) => {
        console.log(value);
        if (i === 1) {
          columnNum = i;
          cell = value;
        }
      });
      return (
        <div key={columnNum}>
          <input className={dashTblCell} type="text" value={cell} />
        </div>
      );
    });

    return (
      <div className={dashApts}>
        <div className={dashAptsHdr}>
          <h5 className={dashAptsTitle}>Appointments</h5>
          <div className="apt-expand">
            <Link
              to={
                pathname === "/admin/dash"
                  ? "/admin/appointments"
                  : "/admin/dash"
              }
            >
              <i className="fas fa-expand fa-lg" />
            </Link>
          </div>
        </div>
        <div className={dashTbl}>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[1]}</div>
            {rowOne}
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[2]}</div>
            <input
              className={dashTblCell}
              type="text"
              value={"ldscirkev@gmail.com"}
              onClick={e =>
                this.handleSelector("selectedEmail", e.target.value)
              }
            />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[3]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[4]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[5]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[6]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[7]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[8]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[9]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>{keys[10]}</div>
            <input className={dashTblCell} type="text" value={long} />
          </div>
        </div>
        <div className={dashMsgr}>
          <Messanger
            selectedEmail={this.state.selectedEmail}
            selectedPhone={this.state.selectedPhone}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Appointments);
