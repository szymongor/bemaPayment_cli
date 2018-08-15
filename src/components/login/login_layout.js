import React from "react";
import "./login_layout.css";
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col
} from "react-bootstrap";

const FieldGroup = ({ id, label, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
};

const GridWrapper = props => {
  let colParams = {
    xs: 10,
    sm: 8,
    md: 6,
    lg: 4,
    xsOffset: 1,
    smOffset: 2,
    mdOffset: 3,
    lgOffset: 4
  };
  return (
    <Grid className="login-form">
      <Row>
        <Col {...colParams} className="border-layout">
          {props.children}
        </Col>
      </Row>
    </Grid>
  );
};

const LoginLayout = ({ handleSubmit, state, handleInputChange }) => {
  return (
    <GridWrapper>
      <form onSubmit={handleSubmit}>
        <FieldGroup
          id="loginGroup"
          label="Username"
          type="text"
          name="username"
          value={state.login}
          onChange={handleInputChange}
        />
        <FieldGroup
          id="passwordGroup"
          label="Password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
        <Button bsStyle="primary" type="submit" className="pull-right">
          Login
        </Button>
      </form>
    </GridWrapper>
  );
};

export default LoginLayout;