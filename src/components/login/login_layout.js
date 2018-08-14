import React from "react";
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col
} from "react-bootstrap";

const LoginLayout = ({ handleSubmit, state, handleInputChange }) => {
  return (
    <Grid>
      <Row>
        <Col
          xs={6}
          sm={6}
          md={6}
          lg={4}
          xsOffset={3}
          smOffset={3}
          mdOffset={3}
          lgOffset={4}
        >
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
        </Col>
      </Row>
    </Grid>
  );
};

export default LoginLayout;