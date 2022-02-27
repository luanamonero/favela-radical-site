import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 45rem;
  left: 0rem;
  top: 115rem;
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
      width: 60rem;
      height: 60rem;
      left: 0;
      top: 2rem;
    }
    &:last-child {
      left:45rem;
      top: 15rem;
    }
  }
`;

export const Card = styled.section`

  h1 {
    color: #f2f2f2;
    position: absolute;
    width: 30rem;
    height: 10rem;
    left: 5rem;
    top: 12rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size:5rem;
    line-height: 3rem;
    /* or 112% */

    letter-spacing: -0.015em;
  }

  p {
    position: absolute;
    width: 35rem;
    height: 25rem;
    left: 5rem;
    top: 22rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 40px;
    /* or 160% */

    letter-spacing: -0.015em;

    color: #F2F2F2;
  }
`;
