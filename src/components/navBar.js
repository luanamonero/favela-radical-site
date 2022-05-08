import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import logofavela from "../assets/logofavela.jpg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="sticky">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logofavela} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://www.instagram.com/favelaradical/"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineInstagram style={{ marginBottom: "2px" }} /> Instagram
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://pt-br.facebook.com/FRfavelaradical/"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFacebook
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                Facebook
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://twitter.com/FavelaRadical"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineTwitter
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                Twitter
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
