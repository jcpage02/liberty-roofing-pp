import React, { Component } from "react";
import axios from "axios";
import "./Appointment.css";
import Messanger from "./../Messanger/Messanger";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Appointments extends Component {
  state = {
    appointments: [],
    selectedEmail: "",
    selectedPhone: "",
    selected: false,
    newAppointment: false
  };

  componentDidMount() {
    axios.get("/api/apts").then(res => {
      this.setState({
        appointments: res.data
      });
    });
  }

  handleSelector = (prop, e) => {
    this.state.selected
      ? this.setState({ [prop]: "", selected: false })
      : this.setState({ [prop]: e, selected: true });
  };

  render() {
    const { appointments, newAppointment } = this.state;

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
    const dashTblBtnCol =
      pathname === "/admin/dash" ? "dash-edit-delete" : "edit-delete";
    const dashTblNewBtn =
      pathname === "/admin/dash" ? "" : "far fa-plus-square fa-lg";
    const dashTblEditBtn =
      pathname === "/admin/dash" ? "" : "fas fa-edit fa-lg";
    const dashTblDelBtn =
      pathname === "/admin/dash" ? "" : "far fa-trash-alt fa-lg";

    let ids = [];
    let firstNames = [];
    let lastNames = [];
    let addresses = [];
    let cities = [];
    let states = [];
    let phones = [];
    let emails = [];
    let images = [];
    let dates = [];
    let types = [];

    appointments.map((object, i) => {
      ids.push(object.apt_id);
      firstNames.push(object.cust_first);
      lastNames.push(object.cust_last);
      addresses.push(object.cust_address);
      cities.push(object.cust_city);
      states.push(object.cust_state);
      phones.push(object.cust_phone);
      emails.push(object.cust_email);
      images.push(object.cust_img);
      dates.push(object.apt_date);
      types.push(object.apt_type);
      return null;
    });

    let idColumn = ids.map((id, i) => (
      <div className={dashTblBtnCol} key={i}>
        <i className={dashTblEditBtn} value={id} />
        <i className={dashTblDelBtn} value={id} />
      </div>
    ));
    let firstNamesColumns = firstNames.map((name, i) => (
      <div className={dashTblCell} key={i}>
        <input value={name} />
      </div>
    ));
    let lastNamesColumns = lastNames.map((name, i) => (
      <div className={dashTblCell} key={i}>
        <input value={name} />
      </div>
    ));
    let addressesColumns = addresses.map((address, i) => (
      <div className={dashTblCell} key={i}>
        <input value={address} />
      </div>
    ));
    let citiesColumns = cities.map((city, i) => (
      <div className={dashTblCell} key={i}>
        <input value={city} />
      </div>
    ));
    let statesColumns = states.map((state, i) => (
      <div className={dashTblCell} key={i}>
        <input value={state} />
      </div>
    ));
    let phonesColumns = phones.map((phone, i) => (
      <div className={dashTblCell} key={i}>
        <input
          value={phone}
          onClick={e => this.handleSelector("selectedPhone", e.target.value)}
        />
      </div>
    ));
    let emailsColumns = emails.map((email, i) => (
      <div className={dashTblCell} key={i}>
        <input
          value={email}
          onClick={e => this.handleSelector("selectedEmail", e.target.value)}
        />
      </div>
    ));
    let imagesColumns = images.map((img, i) => (
      <div className={dashTblCell} key={i}>
        <input value={img} />
      </div>
    ));
    let datesColumns = dates.map((date, i) => (
      <div className={dashTblCell} key={i}>
        <input value={date} />
      </div>
    ));
    let typesColumns = types.map((type, i) => (
      <div className={dashTblCell} key={i}>
        <input value={type} />
      </div>
    ));

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
            <div className={dashTblHeader}>
              <i className={dashTblNewBtn} />
            </div>
            {idColumn}
          </div>

          <div className="apt-tbl-column">
            <div className={dashTblHeader}>First Name</div>
            {firstNamesColumns}
          </div>

          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Last Name</div>
            {lastNamesColumns}
          </div>

          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Address</div>
            {addressesColumns}
          </div>

          <div className="apt-tbl-column">
            <div className={dashTblHeader}>City</div>
            {citiesColumns}
          </div>

          <div className="apt-tbl-column">
            <div className={dashTblHeader}>State</div>
            {statesColumns}
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Phone #</div>
            {phonesColumns}
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Email</div>
            {emailsColumns}
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Images</div>
            {imagesColumns}
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Date</div>
            {datesColumns}
          </div>
          <div className="apt-tbl-column">
            <div className={dashTblHeader}>Type</div>
            {typesColumns}
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
