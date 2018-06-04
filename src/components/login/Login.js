import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };

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
      'A form was submitted: ' + this.state.login,
      '/',
      this.state.password
    );
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

export default Login;

const LoginLayout = ({ handleSubmit, state, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login:
        <input
          type="text"
          name="login"
          value={state.login}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
