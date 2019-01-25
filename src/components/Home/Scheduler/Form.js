import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
    state = {
        phone: ''
    }
  render() {
    const view = this.props.counter === 2 ? "Form" : "Form-none";
    const { infoChange } = this.props;
    return (
      <div className={view}>
        <div className="schedule-form-container">
          <div className="schedule-form">
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>First Name:</h6>
                <input
                  className="input-name"
                  type="text"
                  placeholder="First Name"
                  onChange={e => infoChange("firstName", e.target.value)}
                />
              </div>
              <div className="schedule-form-column">
                <h6>Last Name:</h6>
                <input
                  className="input-name"
                  type="text"
                  placeholder="Last Name"
                  onChange={e => infoChange("lastName", e.target.value)}
                />
              </div>
            </div>
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>Address:</h6>
                <input
                  type="text"
                  placeholder="Address"
                  onChange={e => infoChange("address", e.target.value)}
                />
              </div>
            </div>
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>City:</h6>
                <input
                  className="input-city"
                  type="text"
                  placeholder="City"
                  onChange={e => infoChange("city", e.target.value)}
                />
              </div>
              <div className="schedule-form-column">
                <h6>State:</h6>
                <input
                  className="input-state"
                  type="text"
                  placeholder="ST"
                  onChange={e => infoChange("state", e.target.value)}
                />
              </div>
            </div>
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>Phone:</h6>
                <div className="schedule-form-row">
                  <input
                    className="input-phone"
                    type="phone"
                    placeholder="###"
                    onChange={e => infoChange("phone1", e.target.value)}
                  />
                  <input
                    className="input-phone"
                    type="phone"
                    placeholder="###"
                    onChange={e => infoChange("phone2", e.target.value)}
                  />
                  <input
                    className="input-phone"
                    type="phone"
                    placeholder="####"
                    onChange={e => infoChange("phone3", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>Email:</h6>
                <input
                  className="input-email"
                  type="text"
                  placeholder="Email"
                  onChange={e => infoChange('email', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
