import React, { Component } from 'react';
import logo from '../static/logo.png';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo-container">
          <img src={logo} className="dd-logo" alt="" />
        </div>
        <h1 className="App-title">Welcome</h1>
      </div>
    );
  }
}

export default Home;
