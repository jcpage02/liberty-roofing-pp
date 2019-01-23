import React, { Component } from "react";
import "./TypeForm.scss";

class TypeForm extends Component {
  render() {
    const view = this.props.counter === 3 ? "TypeForm" : "TypeForm-none";
    const { typeChange, submitApt } = this.props;
    return (
      <div className={view}>
        <div className="type-form-container">
          <h3>What can we help you with?</h3>
          <div className="type-selectors">
            <div className="type-item">
              <h5>New Roof</h5>
              <input
                type="checkbox"
                value="Roof"
                onChange={e => typeChange(e.target.value)}
              />
            </div>
            <div className="type-item">
              <h5>Roof Repair</h5>
              <input
                type="checkbox"
                value="Roof Repair"
                onChange={e => typeChange(e.target.value)}
              />
            </div>
            <div className="type-item">
              <h5>Windows</h5>
              <input
                type="checkbox"
                value="Windows"
                onChange={e => typeChange(e.target.value)}
              />
            </div>
            <div className="type-item">
              <h5>Siding</h5>
              <input
                type="checkbox"
                value="Siding"
                onChange={e => typeChange(e.target.value)}
              />
            </div>
            <div className="type-item">
              <h5>Gutters</h5>
              <input
                type="checkbox"
                value="Gutters"
                onChange={e => typeChange(e.target.value)}
              />
            </div>
          </div>
          <button className='type-submit-button' onClick={() => submitApt()}>Schedule</button>
        </div>
      </div>
    );
  }
}

export default TypeForm;
