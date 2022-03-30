import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiFillPhone,
  AiOutlineUser,
  AiFillDribbbleCircle,
  AiFillPicture,
  AiFillDollarCircle,
} from "react-icons/ai";
import logo from '../assets/logo2.png';


function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar 
    expanded={expand}
    fixed="top"
    expand="md"
    className="sticky">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="logo" alt="logo"/>
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
          <Nav className="ms-auto navLink" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about"  onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre Nós
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={Link} to="/project"  onClick={() => updateExpanded(false)}>
                <AiFillDribbbleCircle
                  style={{ marginBottom: "2px" }}
                />{" "}
                Atividades
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project"  onClick={() => updateExpanded(false)}>
                <AiFillPicture
                  style={{ marginBottom: "2px" }}
                />{" "}
                Galeria
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project"  onClick={() => updateExpanded(false)}>
                <AiFillDollarCircle
                  style={{ marginBottom: "2px" }}
                />{" "}
                Doações
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project"  onClick={() => updateExpanded(false)}>
                <AiFillPhone
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contato
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;