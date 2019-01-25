import React, { Component } from "react";
import "./Messanger.scss";
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

  handleSendMessage = prop => {
    if (prop === "SMS") {
      const { twilio } = this.state;
      const { selectedPhone } = this.props;
      console.log(selectedPhone);
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
    }
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
        <div className='msgr-hdr'>
          <h4>Send SMS: {selectedPhone}</h4>
          <button onClick={() => this.handleSendMessage("SMS")}>
            Send SMS
          </button>
        </div>
        <textarea
          className="msg-input"
          onChange={e => this.handleChange("twilio", "message", e.target.value)}
          type="text"
          value={this.state.twilio.message}
        />
        <div className='msgr-hdr'>
          <h4>Send Email: {selectedEmail}</h4>
          <button onClick={() => this.handleSendMessage("Email")}>
            Send Email
          </button>
        </div>
        <textarea
          className="msg-input"
          onChange={e =>
            this.handleChange("nodemailer", "message", e.target.value)
          }
          type="text"
          value={this.state.nodemailer.message}
        />
      </div>
    );
  }
}

export default Messanger;
