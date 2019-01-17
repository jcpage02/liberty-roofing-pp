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
    const { twilio } = this.state;
    const { selectedPhone } = this.props;
    console.log(selectedPhone)
    axios
      .get(
        `/send-msg?phone=${selectedPhone}&message=${twilio.message}`,
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
    const { nodemailer } = this.state;
    const { selectedEmail } = this.props;
    axios
      .get(
        `/send-email?email=${selectedEmail}&message=${nodemailer.message}`,
        nodemailer
      )
      .catch(err => console.log(err));
    this.setState({
      nodemailer: {
        message: ""
      }
    });
  };

  render() {
    const { selectedEmail, selectedPhone } = this.props;
    return (
      <div className="Messanger">
        <span>
          <h4>Send SMS: {selectedPhone}</h4>
          <textarea
            className="msg-input"
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
          <textarea
            className="msg-input"
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
