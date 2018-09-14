import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid, Row, Col, ListGroupItem, ListGroup, Glyphicon } from 'react-bootstrap';

const Navbars = ({}) => {
  return (
    <Grid fluid>
      <Row>
        <Col lg={12} className="noPadding">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">ePayment</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Messages
                </NavItem>
                <NavItem eventKey={2} href="#">
                  People
                </NavItem>
                <NavDropdown
                  eventKey={3}
                  title="Dropdown"
                  id="basic-nav-dropdown"
                >
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Profile
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Log Out
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col lg={2} md={3} sm={3} xs={12}>
          <ListGroup>
            <ListGroupItem href="#link1">
              <Glyphicon glyph="glyphicon glyphicon-comment" />
              Comments
            </ListGroupItem>
            <ListGroupItem href="#link2">
              <Glyphicon glyph="glyphicon glyphicon-usd" />
              Payments
            </ListGroupItem>
            <ListGroupItem href="#link3">
              <Glyphicon glyph="glyphicon glyphicon-calendar" />
              Calendar
            </ListGroupItem>
            <ListGroupItem href="#link4">
              <Glyphicon glyph="glyphicon glyphicon-lock" />
              Some stuff
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Grid>
  );
};


export default Navbars;
