import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 20%;
  left: 0rem;
  top: 25em;
  display: flex;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }

  img {
    position: absolute;
    width: 42rem;
    height: 50rem;
    left: 0;
    top: -9.47rem;

    @media (max-width: 1080px) {
      background: #e43145;
      width: 100%;
      height: 35rem;
      top: 0rem;
    }
    @media (max-width: 720px) {
      background: #e43145;
      width: 100%;
      height: 35rem;
      top: 0rem;
    }
  }

  h1 {
    position: absolute;
    width: 45%;
    left: 3rem;
    top: 4rem;
    color: #f2f2f2;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 6.5rem;
    line-height: 6rem;
    /* or 112% */

    letter-spacing: -0.015em;

    @media (max-width: 1080px) {
      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: -0.015em;
      width: 90%;
      top: 1rem;
      color: #f2f2f2;
    }
  }

  p {
    position: absolute;
    width: 46%;
    top: 5rem;
    right: 3%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 40px;
    /* or 160% */

    letter-spacing: -0.015em;

    color: #000000;

    @media (max-width: 1080px) {
      color: #f2f2f2;
      width:90%;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      top: 12rem;
      line-height: 28px;
      padding: 1rem 1rem;
    }
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

    &:hover {
      background: #e43145;
      color: #f2f2f2;
    }

    @media (max-width: 1080px) {
      position: absolute;
      top:30rem;
      padding: 0.5rem 1rem;
      left: 25rem;
      border: 2px solid #f2f2f2;
      border-radius: 10px;
      color: #f2f2f2;
      background: #e43145;

      &:hover {
      background: #f2f2f2;
      color: black;
      border: 2px solid black;
      }
    }
  }
`;

export const Letter = styled.span`
  position: absolute;
  top: 55rem;
  right: 0rem;

  img {
    width: 40rem;
  }

  @media (max-width: 1080px)  {
      position: absolute;
      top: 60rem;
      right: 0rem;

    img {
      width: 20rem;
    }
  }
`;
