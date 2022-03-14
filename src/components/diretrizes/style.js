import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 40rem;
  top: 75rem;

  img {
    position: absolute;
    width: 36rem;
    height: 30rem;
    top: 2rem;
    left: 0;

    @media (max-width: 720px) {
      width: 100%;
      height: 30rem;
      padding: 1rem;
    }

    :nth-child(1) {
      position: absolute;
      width: 30rem;
      top: -18rem;
      left: -4rem;

      @media (max-width: 1080px) {
        width: 30rem;
        top: -20rem;
      }

      @media (max-width: 720px) {
        width: 17rem;
        top: -20rem;
      }
    }
  }
`;

export const ContainerCard = styled.div `
  position: absolute;
  display: inline-block;
  height: 30rem;
  right: 0;
  padding: 1rem;
  width: 100%;

  @media (max-width: 720px) {
    width: 100%;
    top: 32rem;
  }

`

export const Card = styled.div`
  width: 38rem;
  height: 10rem;
  left: 40rem;
  padding: 1rem 1rem;


  border: 5px solid #eb0000;
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-width: 720px) {
    width: 100%;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;

    @media (max-width: 720px) {
      font-size: 0.9rem;
    }
  }
`;

export const Card2 = styled.div`
  width: 38rem;
  height: 10rem;
  padding: 1rem 1rem;
  margin-top: 2rem;

  border: 5px solid #eb0000;
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-width: 720px) {
    width: 100%;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;

    @media (max-width: 720px) {
      font-size: 0.9rem;
    }
  }

  img {
    width: 20rem;
    right: -2.1rem;
  }
`;
