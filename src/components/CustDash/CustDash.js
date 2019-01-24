import React, { Component } from "react";
import "./CustDash.scss";
import Checkout from "../Payment/Checkout";
import logo from "../../LibertyRoofingLogo.png";
import { Link } from "react-router-dom";
// import axios from "axios";

class CustDash extends Component {
  state = {
    totalDue: 15000,
    minDue: 200,
    paymentsMade: [200, 200, 200, 200]
  };

  render() {
    const { minDue, paymentsMade } = this.state;

    return (
      <div className="CustDash">
        <div className="cust-container">
          <div className="cust-dash-header">
            <Link to="/">
              <div className='cust-header-logo'>
                <img src={logo} />
              </div>
            </Link>
            <h4>Customer Dashboard</h4>
            <a href="http://localhost:3000/#/">
              <i className="fas fa-sign-out-alt fa-2x" />
            </a>
          </div>
          <div className="cust-body">
            <div className="cust-left">
              <div className="cust-balance-container">
                <h5>Balance Board</h5>
                <div className="cust-balance">
                  <div className="cust-balance-header">
                    <h5>Current Balance</h5>
                    <Checkout
                      name={"Payment"}
                      description={"Payment Submitted!"}
                      amount={minDue}
                    />
                  </div>
                  <div className="cust-balance-amount">
                    <h5>Total Due:</h5>
                    <h6>$15,500.00</h6>
                  </div>
                  <div className="cust-balance-amount">
                    <h5>Amount Due by 3/1/2019:</h5>
                    <h6>{`$${minDue}.00`}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="cust-right">
              <div className="cust-activity-container">
                <h5>Activity Board</h5>
                <div className="cust-activity">
                  <div className="cust-activity-header">
                    <h5>Current Balance</h5>
                  </div>
                  <div className="cust-activity-amount">
                    <div className="cust-activity-row">
                      <h5>Paid on 2/1/2019</h5>
                      <h6>{`$${paymentsMade[0]}.00`}</h6>
                    </div>
                    <div className="cust-activity-row">
                      <h5>Paid on 1/1/2019</h5>
                      <h6>{`$${paymentsMade[1]}.00`}</h6>
                    </div>
                    <div className="cust-activity-row">
                      <h5>Paid on 12/1/2018</h5>
                      <h6>{`$${paymentsMade[2]}.00`}</h6>
                    </div>
                    <div className="cust-activity-row">
                      <h5>Paid on 11/1/2018</h5>
                      <h6>{`$${paymentsMade[3]}.00`}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustDash;
