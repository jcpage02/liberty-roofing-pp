import React, { Component } from "react";
import "./Messanger.css";
import axios from "axios";

class Messanger extends Component {
  state = {
    twilio: {
      message: ""
    },
    nodemailer: {
      message: ""
    }
  };

  handleChange = (key, prop, e) => {
    let newState = { ...this.state[key], [prop]: e };
    this.setState({
      [key]: newState
    });
  };
  handleSendSMS = () => {
    const { twilio, selectedPhone } = this.state;
    axios
      .get(
        `/send-msg?recipient=${selectedPhone}&message=${twilio.message}`,
        twilio
      )
      .catch(err => console.log(err));
    this.setState({
      twilio: {
        message: ""
      }
    });
  };
  handleSendEmail = () => {
    const { twilio, selectedEmail } = this.state;
    axios
      .get(
        `/send-email?recipient=${selectedEmail}&message=${twilio.message}`,
        twilio
      )
      .catch(err => console.log(err));
    this.setState({
      nodemailer: {
        message: ""
      }
    });
  };

  render() {
    const {selectedEmail, selectedPhone} = this.props
    console.log(this.props)
    return (
      <div className="Messanger">
        <span>
          <h4>Send SMS: {selectedPhone}</h4>
          <input
            className="msg-twilio-input"
            onChange={e =>
              this.handleChange("twilio", "message", e.target.value)
            }
            type="text"
            value={this.state.twilio.message}
          />
        </span>
        <button onClick={() => this.handleSendSMS()}>Send SMS</button>
        <span>
          <h4>Send Email: {selectedEmail}</h4>
          <input
            className="msg-nodemailer-input"
            onChange={e =>
              this.handleChange("nodemailer", "message", e.target.value)
            }
            type="text"
            value={this.state.nodemailer.message}
          />
        </span>
        <button onClick={() => this.handleSendEmail()}>Send Email</button>
      </div>
    );
  }
}

export default Messanger;
