import React, { Component } from "react";
import axios from "axios";
import "./Appointment.css";
import Messanger from "./../Messanger/Messanger";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


class Appointments extends Component {
  state = {
    appointments: [],
    selectedEmail: '',
    selectedPhone: ''
  };

  componentDidMount() {
    axios.get("/api/apts").then(res => {
      console.log(res.data);
      this.setState({
        appointments: res.data
      });
      res.status(200).send(res.data);
    });
    console.log('Apts' + this.state.appointments)
  }

  handleSelector = (prop, e)=> {
    this.setState({
        [prop]: e
    })
  }

  render() {
    const short = "here is the data";
    const medium = "here is even longer data";
    const long = "here is the longest data ever";

    const { pathname } = this.props.location;
    const dashApts = pathname === "/admin/dash" ? "Appointments" : "Appointments-lg";
    const dashAptsHdr = pathname === "/admin/dash" ? "dash-apt-header" : "apt-header";
    const dashAptsTitle = pathname === "/admin/dash" ? "dash-apt-title" : "apt-title";
    const dashMsgr = pathname === "/admin/dash" ? "dash-msgr" : "apt-msgr";
    const dashTbl = pathname === "/admin/dash" ? "dash-tbl" : "apt-tbl";
    const dashTblHeader = pathname === "/admin/dash" ? "dash-apt-tbl-header" : "apt-tbl-header";
    const dashTblCell = pathname === "/admin/dash" ? "dash-apt-tbl-cell" : "apt-tbl-cell";

    return (
      <div className={dashApts}>
        <div className={dashAptsHdr}>
          <h5 className={dashAptsTitle}>Appointments</h5>
          <div className="apt-expand">
            <Link to={pathname === "/admin/dash" ? "/admin/appointments" : "/admin/dash"}>
              <i className="fas fa-expand fa-lg" />
            </Link>
          </div>
        </div>
        <div className={dashTbl}>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Customer Name</div>
            <input className={dashTblCell} type="text" value={'James Page'} />
            <input className={dashTblCell} type="text" value={short} />
            <input className={dashTblCell} type="text" value={short} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Phone #</div>
            <input className={dashTblCell} type="text" value={8168881088} 
                onClick={e => this.handleSelector('selectedPhone', e.target.value)}
            />
            <input className={dashTblCell} type="text" value={medium} />
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Email</div>
            <input className={dashTblCell} type="text" value={'ldscirkev@gmail.com'} 
                onClick={e => this.handleSelector('selectedEmail',  e.target.value)}
            />
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={medium} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Column Name</div>
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Column Name</div>
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Column Name</div>
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Column Name</div>
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
            <input className={dashTblCell} type="text" value={long} />
          </div>
        </div>
        <div className={dashMsgr}>
          <Messanger selectedEmail={this.state.selectedEmail} selectedPhone={this.state.selectedPhone}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Appointments);
