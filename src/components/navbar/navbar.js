import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavLinkItem = ({ path, name }) => (
  <LinkContainer to={path}>
    <NavItem>{name}</NavItem>
  </LinkContainer>
);

const NavbarHeader = ({ path, name }) => (
  <Navbar.Header>
    <Navbar.Brand>
      <a href={path}>{name}</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
);

const NavbarLayout = () => {
  return (
    <Navbar>
      <NavbarHeader path="/main" name="E-Payment" />
      <Navbar.Collapse>
        <Nav>
          <NavLinkItem path="/bills" name="Bills" />
        </Nav>
        <Nav pullRight>
          <NavLinkItem path="/" name="LogOut" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarLayout;
