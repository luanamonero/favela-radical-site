import React from 'react';
import { Container } from 'react-bootstrap';
import seta1 from '../../assets/ENFEITESETA_01.svg'
function Letter() {
  return (
    <Container>
      <img className="letterImg" src={seta1} alt="enfeite de seta" />
      <section className="letter">
        <h1>FAVELA</h1>
        <h1>RADICAL</h1>
      </section>
    </Container>
  );
}

export default Letter;
