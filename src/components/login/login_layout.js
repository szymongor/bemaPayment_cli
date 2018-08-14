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

function FieldGroup({ id, label, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

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
            <Button type="submit">Default</Button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

export default LoginLayout;
