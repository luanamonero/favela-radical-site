import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 30rem;
  left: 0rem;
  top: 25em;

  img {
    position: absolute;
    width: 42rem;
    height: 50rem;
    left: 0;
    top: -9.47rem;
  }

  h1 {
    position: absolute;
    width: 25rem;
    height: 10rem;
    left: 5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 6rem;
    line-height: 7rem;
    /* or 112% */

    letter-spacing: -0.015em;
  }

  p {
    position: absolute;
    width: 35rem;
    height: 10rem;
    left: 40rem;
    top: 2rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 40px;
    /* or 160% */

    letter-spacing: -0.015em;

    color: #000000;
  }

  button {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;
    color: black;

    position: absolute;
    left: 65rem;
    top: 25rem;

    border: 3px solid #000000;
    border-radius: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.2em;
  }
`;

export const Letter = styled.span`
  position: absolute;
  width: 100%;
  height: 20rem;
  top: 25em;

  h1 {
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 10rem;
    line-height: 8em;
    /* or 112% */
    letter-spacing: -0.015em;
    color: gray;
    opacity: 0.3;
    width: 20rem;
    left: 35rem;
    
  }

  h2 {
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 10rem;
    line-height: 8em;
    /* or 112% */
    letter-spacing: -0.015em;
    color: gray;
    opacity: 0.3;
    width: 20rem;
    left: 6rem;
    top: 10rem;
  }
`;
