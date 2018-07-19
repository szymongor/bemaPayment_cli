import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return <p>Dashboard</p>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(Login);
