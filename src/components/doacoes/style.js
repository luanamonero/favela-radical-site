import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 45rem;
  left: 0rem;
  top: 115rem;

  button {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;
    color: black;

    position: absolute;
    left: 63rem;
    top: 40rem;

    border: 3px solid #000000;
    border-radius: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.2em;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 20rem;
  left: 0rem;

  img {
    position: absolute;
    width: 30rem;
    left: 0rem;

    :nth-child(2) {
      width: 50rem;
      height: 39rem;
      left: -2rem;
      top: 6rem;
    }
    &:last-child {
      left:43rem;
      top: 10rem;
    }
  }
`;

export const Card = styled.section`

  h1 {
    color: #f2f2f2;
    position: absolute;
    width: 30rem;
    height: 10rem;
    left: 3rem;
    top: 8rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size:5rem;
    line-height: 5rem;
    /* or 112% */

    letter-spacing: -0.015em;
  }

  p {
    position: absolute;
    width: 30rem;
    height: 20rem;
    left: 3rem;
    top: 20rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 25px;
    /* or 160% */

    color: #F2F2F2;
  }
`;
