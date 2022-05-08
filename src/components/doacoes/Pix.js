import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem, Container, Button } from "react-bootstrap";
import pix1 from "../../assets/pix1.JPG";
import codigo from "../../assets/codigo.jpeg";
import { Link } from "react-router-dom";

function Pix() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <img src={pix1} className="img-pix" alt="logo" />
          <h3 className="title-pix">SEJA UM PARCEIRO</h3>
          <p className="p-pix">Apoiei nosso projeto!</p>
        </Col>
        <Col className="card-pix" sm={2}>
          <Card style={{ width: "23rem", alignItems: "center", marginTop: "30%", marginLeft: "30%"}}>
            <Card.Img variant="top" src={codigo} />
            <Card.Body>
              <Card.Title>PIX PARA DOAÇÃO</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>CNPJ: 39.421.031/0001-51</ListGroupItem>
              <ListGroupItem>Instituto Favela Radical</ListGroupItem>
              <ListGroupItem>Banco santander</ListGroupItem>
            </ListGroup>
            <Link to="/">
              <Button size="md" style={{ marginTop: "5px", marginBottom: "5px"}}>
                VOLTAR
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pix;
