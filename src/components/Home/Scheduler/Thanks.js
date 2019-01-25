import React, { Component } from "react";
import "./Thanks.scss";

class TypeForm extends Component {
  render() {
    const view = this.props.counter === 4 ? "Thanks" : "Thanks-none";
    return (
      <div className={view}>
        <div className="thanks-container">
          <h3>Thanks for scheduling!</h3>
          <p>We will be contacting you shortly.</p>
        </div>
      </div>
    );
  }
}

export default TypeForm;
