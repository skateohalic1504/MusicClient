import React from "react";

//Bootstrap Components
import {
  Navbar,
  Nav,
} from "react-bootstrap";

//images
import logo from "../img/logo.png";

//Bootstrap Stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
//Bootstrap Stylesheet

class HeaderBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="jayt_logo" height="70px" width="80px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Music</Nav.Link>
              <Nav.Link href="#link">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default HeaderBar;
