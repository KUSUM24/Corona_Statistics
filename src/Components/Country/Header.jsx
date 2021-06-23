import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        style={{ boxShadow: "0px 0px 10px 5px gray", marginTop: "0.5%" }}
      >
        <Navbar.Brand href="/">Corona Live Statistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Link to="/Corona_Statistics">
              <div className="btn btn-primary m-2">Home</div>
            </Link>
            <Link to="/historic">
              <div className="btn btn-primary m-2">Historic</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
