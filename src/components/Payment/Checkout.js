import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";


class Checkout2 extends Component {
  onToken = token => {
    fetch("/checkout", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(res => {
      alert("Payment Submitted!");
    });
  };

  render() {
    return (
      <div className="Checkout">
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_WNLxHhXwnZtM2aeioB4mSh1N"
          name="Liberty Roofing"
          amount={this.props.amount * 100}
          currency="USD"
          token={this.onToken}
        />
      </div>
    );
  }
}

export default Checkout2;
