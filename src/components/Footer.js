import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo2.svg';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <img src={logo} className="logo" alt="logo" />
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Favela Radical</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <h3>Acompanhe nosso trabalho</h3>
            </li>
            <li className="social-icons">
              <a
                className="social-text"
                href="https://www.instagram.com/favelaradical/"
                style={{ color: "white" }}
              > INSTAGRAM
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://pt-br.facebook.com/FRfavelaradical/"
                style={{ color: "white" }}
                className="social-text"
              >
                FACEBOOK
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;