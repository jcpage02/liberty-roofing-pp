import React, { Component } from "react";
import axios from "axios";
import "./Appointment.css";

class Appointments extends Component {
  state = {
    twilio: {
      recipient: "",
      message: ""
    }
  };

  handleChange = (prop, e) => {
    let newState = { ...this.state.twilio, [prop]: e };
    this.setState({
      twilio: newState
    });
  };

  handleSend = () => {
    const { twilio } = this.state;
    console.log(twilio);
    axios
      .get(
        `/send-msg?recipient=${twilio.recipient}&message=${twilio.message}`,
        twilio
      )
      .catch(err => console.log(err));
  };
  handleSendEmail = () => {
    const { twilio } = this.state;
    console.log(twilio);
    axios
      .get(
        `/send-email?recipient=${twilio.recipient}&message=${twilio.message}`,
        twilio
      )
      .catch(err => console.log(err));
  };

  render() {
    const short = "here is the data";
    const medium = "here is even longer data";
    const long = "here is the longest data ever";

    return (
      <div className="Appointments">
        <div className="apt-tbl">
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className="apt-tbl-cell" type="text" value={short} />
            <input className="apt-tbl-cell" type="text" value={short} />
            <input className="apt-tbl-cell" type="text" value={short} />
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className="apt-tbl-cell" type="text" value={medium} />
            <input className="apt-tbl-cell" type="text" value={medium} />
            <input className="apt-tbl-cell" type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className="apt-tbl-cell" type="text" value={short} />
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={medium} />
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
            <input className="apt-tbl-cell" type="text" value={long} />
          </div>
        </div>
        <div className="apt-twilio">
          <span>
            Twilio:
            <input
              className="twilio-input"
              onChange={e => this.handleChange("message", e.target.value)}
              type="text"
            />
          </span>
          <button onClick={() => this.handleSend()}>Send SMS</button>
          <span>
            Nodemailer:
            <input
              className="nodemailer-input"
              onChange={e => this.handleChange("message", e.target.value)}
              type="text"
            />
          </span>
          <button onClick={() => this.handleSendEmail()}>Send Email</button>
        </div>
      </div>
    );
  }
}

export default Appointments;
