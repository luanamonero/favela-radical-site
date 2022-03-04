import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 60rem;
  left: 0rem;
  top: 180rem;

  h1 {
    position: absolute;
    width: 60rem;
    height: 13rem;
    left: 5rem;
    top: 2rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 10rem;
    line-height: 10rem;
    /* or 100% */

    letter-spacing: 0.03em;

    /* Brand-Black */

    color: #1f1f24;
  }

  img {
    position: absolute;
    width: 45rem;
    top: 0rem;
    right: 0rem;

    :nth-child(3) {
      position: absolute;
      width: 13rem;
      height: 10rem;
      left: 0rem;
      top: 11rem;
    }
  }
`;

export const Content = styled.section`
  position: absolute;
  border: 3px solid red;
  top: 25rem;
  width: 100%;
  height: 20rem;
`