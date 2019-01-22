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
    newAppointment: false,
    edit: false,
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    images: "",
    date: "",
    type: ""
  };

  componentDidMount() {
    axios.get("/api/apts").then(res => {
      this.setState({
        appointments: res.data,
        selected: false,
        newAppointment: false
      });
    });
  }

  handleSelector = (prop, e) => {
    this.state.selected
      ? this.setState({ [prop]: "", selected: false })
      : this.setState({ [prop]: e, selected: true });
  };

  addNewRow = () => {
    !this.state.newAppointment
      ? this.setState({ newAppointment: true })
      : this.setState({ newAppointment: false });
  };

  handleChange = (prop, e) => {
    console.log(prop, e);
    this.setState({ [prop]: e });
  };

  handleEditBtn = () => {
    !this.state.edit ? this.setState({edit: true}) : this.setState({edit: false})
  }

  addAppointment = () => {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      phone,
      email,
      images,
      date,
      type
    } = this.state;
    axios
      .post("/api/apts", {
        firstName,
        lastName,
        address,
        city,
        state,
        phone,
        email,
        images,
        date,
        type
      })
      .then(res => {
        let newState = [...this.state.appointments];
        newState.push(res.data[0]);
        this.setState({ appointments: newState, newAppointment: false });
      });
  };

  deleteAppointment = (arrId, aptId) => {
    const id = aptId;
    axios.delete(`/api/apts/${id}`).then(res => {
      let newState = [...this.state.appointments];
      newState.splice(arrId, 1);
      this.setState({ appointments: newState });
    });
  };

  updateAppointment = (arrId, aptId) => {
    const { appointments, edit } = this.state;
    const id = aptId;
    const first = appointments[arrId].first;
    const last = appointments[arrId].last;
    const address = appointments[arrId].address;
    const city = appointments[arrId].city;
    const state = appointments[arrId].state;
    const phone = appointments[arrId].phone;
    const email = appointments[arrId].email;
    const date = appointments[arrId].date;
    const type = appointments[arrId].type;
    if(!edit) {
      this.setState({edit: true})
    }
    axios.put(`/api/apts/${id}`, {
      first,
      last,
      address,
      city,
      state,
      phone,
      email,
      date,
      type
    });
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
      pathname === "/admin/dash" ? "" : this.state.edit ? '' : "fas fa-edit fa-lg";
    const dashTblDelBtn =
      pathname === "/admin/dash" ? "" : "far fa-trash-alt fa-lg";
    const dashBackground =
      pathname === "/admin/dash" ? "dash-apt-background" : "apt-background";
    const dashContainer =
      pathname === "/admin/dash" ? "dash-apt-container" : "apt-container";
    const dashFirstTblCol =
      pathname === "/admin/dash" ? "dash-tbl-column" : "apt-tbl-column";
    const saveEditBtn = this.state.edit ? "far fa-save fa-lg" : ''
    const editable = this.state.edit ? true : false

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
    /////////////////////////////////////// ADD NEW ROW ////////////////////////////////////
    let addBtns = newAppointment ? (
      <div className={dashTblBtnCol}>
        <i
          className="far fa-save fa-lg"
          onClick={() => this.addAppointment()}
        />
      </div>
    ) : null;
    let addFN = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="First Name"
          contentEditable={editable}
          onChange={e => {
            this.handleChange("firstName", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addLN = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="Last Name"
          onChange={e => {
            this.handleChange("lastName", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addAddress = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="Address"
          onChange={e => {
            this.handleChange("address", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addCity = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="City"
          onChange={e => {
            this.handleChange("city", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addState = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="State"
          onChange={e => {
            this.handleChange("state", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addPhone = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="Phone #"
          onChange={e => {
            this.handleChange("phone", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addEmail = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="Email"
          onChange={e => {
            this.handleChange("email", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addImages = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="Images"
          onChange={e => {
            this.handleChange("images", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addDate = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="Date"
          onChange={e => {
            this.handleChange("date", e.target.value);
          }}
        />
      </div>
    ) : null;
    let addType = newAppointment ? (
      <div className={dashTblCell}>
        <input
          placeholder="Type"
          onChange={e => {
            this.handleChange("type", e.target.value);
          }}
        />
      </div>
    ) : null;

    /////////////////////////////////////// ROWS FROM DATABASE ////////////////////////////////////
    let idColumn = ids.map((id, i) => (
      <div className={dashTblBtnCol} key={i}>
        <i
          className={dashTblEditBtn}
          value={id}
          onClick={() => this.handleEditBtn()}
        />
        <i
          className={saveEditBtn}
          value={id}
          onClick={() => this.updateAppointment(i, id)}
        />
        <i
          className={dashTblDelBtn}
          value={id}
          onClick={() => this.deleteAppointment(i, id)}
        />
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
        <div className={dashBackground} />
        <div className={dashContainer}>
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
            <div className={dashFirstTblCol}>
              <div className={dashTblHeader}>
                <i className={dashTblNewBtn} onClick={() => this.addNewRow()} />
              </div>
              {addBtns}
              {idColumn}
            </div>

            <div className="apt-tbl-column">
              <div className={dashTblHeader}>First Name</div>
              {addFN}
              {firstNamesColumns}
            </div>

            <div className="apt-tbl-column">
              <div className={dashTblHeader}>Last Name</div>
              {addLN}
              {lastNamesColumns}
            </div>

            <div className="apt-tbl-column">
              <div className={dashTblHeader}>Address</div>
              {addAddress}
              {addressesColumns}
            </div>

            <div className="apt-tbl-column">
              <div className={dashTblHeader}>City</div>
              {addCity}
              {citiesColumns}
            </div>

            <div className="apt-tbl-column">
              <div className={dashTblHeader}>State</div>
              {addState}
              {statesColumns}
            </div>
            <div className="apt-tbl-column">
              <div className={dashTblHeader}>Phone #</div>
              {addPhone}
              {phonesColumns}
            </div>
            <div className="apt-tbl-column">
              <div className={dashTblHeader}>Email</div>
              {addEmail}
              {emailsColumns}
            </div>
            <div className="apt-tbl-column">
              <div className={dashTblHeader}>Images</div>
              {addImages}
              {imagesColumns}
            </div>
            <div className="apt-tbl-column">
              <div className={dashTblHeader}>Date</div>
              {addDate}
              {datesColumns}
            </div>
            <div className="apt-tbl-column">
              <div className={dashTblHeader}>Type</div>
              {addType}
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
      </div>
    );
  }
}

export default withRouter(Appointments);
