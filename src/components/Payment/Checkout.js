import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'


class Checkout2 extends Component {
  onToken = token => {
    const {amount, description}  = this.props
    const currency = 'USD'
    token.card = void 0
    axios.post('/api/payment', {token, amount, description, currency})
    .then(res => {console.log('charge response', res.data)})
  };

  render() {
    const {amount}  = this.props
    return (
      <div className="Checkout">
        <StripeCheckout
          token={this.onToken}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
          name="Liberty Roofing"
          amount={amount}
          currency="USD"
        />
      </div>
    );
  }
}

export default Checkout2;
