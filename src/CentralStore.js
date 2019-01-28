import React, { Component } from "react";

const MyContext = React.createContext();

class CentralStore extends Component {
  state = {
    isAdmin: false,
    isCust: false
  };
  render() {
    return (
      <div className="CentralStore">
        <MyContext.Provider value={this.state}>
          {this.props.children}
        </MyContext.Provider>
      </div>
    );
  }
}

export default CentralStore;
