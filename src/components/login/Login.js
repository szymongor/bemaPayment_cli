import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postAuth } from './actions/api_actions';
import LoginLayout from './login_layout';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    console.log('LOL');
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(
      'A form was submitted: ' + this.state.username,
      '/',
      this.state.password
    );
    this.props.postAuth(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <LoginLayout
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        state={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { postAuth })(Login);
