import React, { Component } from "react";
import axios from "axios";
import "./Appointment.scss";
import Messanger from "./../Messanger/Messanger";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../../LibertyRoofingLogo.png";

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
    !this.state.edit
      ? this.setState({ edit: true })
      : this.setState({ edit: false });
  };

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
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      phone,
      email,
      date,
      type
    } = this.state;
    const copyArr = this.state.appointments[arrId];
    if (firstName) {
      copyArr.cust_first = firstName;
    }
    if (lastName) {
      copyArr.cust_last = lastName;
    }
    if (address) {
      copyArr.cust_address = address;
    }
    if (city) {
      copyArr.cust_city = city;
    }
    if (state) {
      copyArr.cust_state = state;
    }
    if (phone) {
      copyArr.cust_phone = phone;
    }
    if (email) {
      copyArr.cust_email = email;
    }
    if (date) {
      copyArr.apt_date = date;
    }
    if (type) {
      copyArr.apt_type = type;
    }
    const id = aptId;
    const {
      cust_first,
      cust_last,
      cust_address,
      cust_city,
      cust_state,
      cust_phone,
      cust_email,
      apt_date,
      apt_type
    } = copyArr;
    axios.put(`/api/apts/${id}`, {
      cust_first,
      cust_last,
      cust_address,
      cust_city,
      cust_state,
      cust_phone,
      cust_email,
      apt_date,
      apt_type
    });
    this.handleEditBtn()
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
      pathname === "/admin/dash"
        ? ""
        : this.state.edit
        ? ""
        : "fas fa-edit fa-lg";
    const dashTblDelBtn =
      pathname === "/admin/dash" ? "" : "far fa-trash-alt fa-lg";
    const dashContainer =
      pathname === "/admin/dash" ? "dash-apt-container" : "apt-container";
    const dashFirstTblCol =
      pathname === "/admin/dash" ? "dash-tbl-column" : "apt-tbl-column";
    const dashLogo =
      pathname === "/admin/dash" ? "dash-apt-header-logo" : "apt-header-logo";
    const saveEditBtn = this.state.edit ? "far fa-save fa-lg" : "";
    const editable = this.state.edit ? true : false;

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
        {this.state.edit ? (
          <input
            placeholder={name}
            onChange={e => {
              this.handleChange("firstName", e.target.value);
            }}
          />
        ) : (
          <input
            value={name}
            onChange={e => {
              this.handleChange("firstName", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let lastNamesColumns = lastNames.map((name, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            placeholder={name}
            onChange={e => {
              this.handleChange("lastName", e.target.value);
            }}
          />
        ) : (
          <input
            value={name}
            onChange={e => {
              this.handleChange("lastName", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let addressesColumns = addresses.map((address, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            placeholder={address}
            onChange={e => {
              this.handleChange("address", e.target.value);
            }}
          />
        ) : (
          <input
            value={address}
            onChange={e => {
              this.handleChange("address", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let citiesColumns = cities.map((city, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            placeholder={city}
            onChange={e => {
              this.handleChange("city", e.target.value);
            }}
          />
        ) : (
          <input
            value={city}
            onChange={e => {
              this.handleChange("city", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let statesColumns = states.map((state, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            placeholder={state}
            max="2"
            onChange={e => {
              this.handleChange("state", e.target.value);
            }}
          />
        ) : (
          <input
            value={state}
            max="2"
            onChange={e => {
              this.handleChange("state", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let phonesColumns = phones.map((phone, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            type="number"
            placeholder={phone}
            onClick={e => this.handleSelector("selectedPhone", e.target.value)}
            onChange={e => {
              this.handleChange("phone", e.target.value);
            }}
          />
        ) : (
          <input
            type="number"
            value={phone}
            onClick={e => this.handleSelector("selectedPhone", e.target.value)}
            onChange={e => {
              this.handleChange("phone", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let emailsColumns = emails.map((email, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            type="email"
            placeholder={email}
            onClick={e => this.handleSelector("selectedEmail", e.target.value)}
            onChange={e => {
              this.handleChange("email", e.target.value);
            }}
          />
        ) : (
          <input
            type="email"
            value={email}
            onClick={e => this.handleSelector("selectedEmail", e.target.value)}
            onChange={e => {
              this.handleChange("email", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let datesColumns = dates.map((date, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            placeholder={date.replace(",", ", ")}
            onChange={e => {
              this.handleChange("date", e.target.value);
            }}
          />
        ) : (
          <input
            value={date.replace(",", ", ")}
            onChange={e => {
              this.handleChange("date", e.target.value);
            }}
          />
        )}
      </div>
    ));
    let typesColumns = types.map((type, i) => (
      <div className={dashTblCell} key={i}>
        {this.state.edit ? (
          <input
            placeholder={type.replace(",", ", ")}
            onChange={e => {
              this.handleChange("type", e.target.value);
            }}
          />
        ) : (
          <input
            value={type.replace(",", ", ")}
            onChange={e => {
              this.handleChange("type", e.target.value);
            }}
          />
        )}
      </div>
    ));
///////////////////////////////////////////////////////////////////////////////////////////////
    return (
      <div className={dashApts}>
        <div className={dashContainer}>
          <div className={dashAptsHdr}>
            <Link to="/">
              <div className={dashLogo}>
                <img src={logo} alt='logo'/>
              </div>

            </Link>
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
