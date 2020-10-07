import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./Logo";

const Header = () => {
  return (
    <Navbar className="transparent">
      <Navbar.Brand href="#home" className="header">
        <Logo className="header" /> CLEANMEUP
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="ml-auto headerBtns">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
