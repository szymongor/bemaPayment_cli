import React from "react";
import { Button, FormGroup, ControlLabel, FormControl, Jumbotron } from "react-bootstrap";

const LoginLayout = ({ handleSubmit, state, handleInputChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="loginGroup">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            name="username"
            value={state.login}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup controlId="passwordGroup">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit">Default</Button>
      </form>
    </div>
  );
};

export default LoginLayout;