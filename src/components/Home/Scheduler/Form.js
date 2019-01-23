import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div className={this.props.view}>
        <div className="schedule-form-container">
          <div className="schedule-form">
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>First Name:</h6>
                <input
                  className="input-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="schedule-form-column">
                <h6>Last Name:</h6>
                <input
                  className="input-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>Address:</h6>
                <input type="text" placeholder="Address" />
              </div>
            </div>
            <div className="schedule-form-row">
              <div className="schedule-form-column">
                <h6>City:</h6>
                <input className="input-city" type="text" placeholder="City" />
              </div>
              <div className="schedule-form-column">
                <h6>State:</h6>
                <input className="input-state" type="text" placeholder="ST" />
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
                  />
                  <input
                    className="input-phone"
                    type="phone"
                    placeholder="###"
                  />
                  <input
                    className="input-phone"
                    type="phone"
                    placeholder="####"
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
