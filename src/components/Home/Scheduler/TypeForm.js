import React, { Component } from "react";

class TypeForm extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div className={this.props.view}>
        <div className='type-form-container'>
        <h3>What can we help you with?</h3>
        <div className="type-selectors">
          <div className="type-item">
            <h5>New Roof</h5>
            <input type="checkbox" value="Roof" />
          </div>
          <div className="type-item">
            <h5>Roof Repair</h5>
            <input type="checkbox" value="Roof Repair" />
          </div>
          <div className="type-item">
            <h5>Windows</h5>
            <input type="checkbox" value="Windows" />
          </div>
          <div className="type-item">
            <h5>Siding</h5>
            <input type="checkbox" value="Siding" />
          </div>
          <div className="type-item">
            <h5>Gutters</h5>
            <input type="checkbox" value="Gutters" />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default TypeForm;
