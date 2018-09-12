import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const NavLinkItem = ({ path, name }) => <NavItem href={path}>{name}</NavItem>;

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
    <Navbar inverse>
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
