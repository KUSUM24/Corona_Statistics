import React, { useRef } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export const Header = ({ getSearch }) => {
  let searchRef = useRef();
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ boxShadow: "0px 0px 10px 5px gray" }}
      >
        <Navbar.Brand href="/">Corona Live Statistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="/historic">
              <div className="btn btn-success">Historical</div>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              ref={searchRef}
              onChange={() => getSearch(searchRef.current.value)}
              placeholder="Search"
              className="mr-sm-2"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
