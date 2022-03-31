import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const QuemSomos = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row  className="heading">
            <Col md={7} className="home-header">
              <h1>Lorem ipsum dolor sit amet</h1>
            </Col>
            <Col md={5}>
              <Row xs={2} md={2}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                  sit amet urna a velit porta tempor. Maecenas nisi magna,
                  malesuada eget sapien ac, vestibulum gravida tortor. Proin
                  iaculis sodales mauris, at sagittis nibh faucibus eget. Maecenas
                  nulla lacus, porttitor vitae tincidunt eu, pellentesque varius
                  lorem. Donec tincidunt in est sit amet tristique. Nulla quis
                  semper libero. In hac habitasse platea dictumst. Nunc pulvinar
                  vehicula ante gravida tempor. Morbi non sem egestas, tempor urna
                  commodoPraesent sit amet quam non lacus semper posuere vitae
                  eget orci. Quisque consequat nisi nunc.{" "}
                </p>
                <Button variant="outline-light"className="home-button">
                  VER MAIS
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default QuemSomos;
