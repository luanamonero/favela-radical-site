import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 40rem;
  top: 75rem;

  img {
    position: absolute;
    width: 50%;
    height: 30rem;
    top: 2rem;
    left: 0;

    @media (max-width: 1080px) {
      width: 45%;
      height: 30rem;
      left: 2rem;
      top: 5rem;
    }

    @media (max-width: 720px) {
      top: 0;
      width: 100%;
      height: 33rem;
      left: 0;
      padding: 1rem;
    }

    :nth-child(1) {
      position: absolute;
      width: 50%;
      top: -60%;
      left: -4%;

      @media (max-width: 1080px) {
        width: 30rem;
        top: -18rem;
      }

      @media (max-width: 720px) {
        width: 17rem;
        top: -22rem;
      }
    }
  }
`;

export const ContainerCard = styled.div`
  position: absolute;
  right: 1%;
  top: 10%;
  width: 50%;
  height: 30rem;
  padding: 1rem;

  @media (max-width: 1080px) {
    right: 0rem;
    top: 6rem;
  }

  @media (max-width: 720px) {
    position: absolute;
    display: inline-block;
    width: 100%;
    top: 30rem;
  }

  img {
    width: 20rem;
    height: 15rem;

    @media (max-width: 720px) {
      width: 15rem;
      right: 0;
    }
  }
`;

export const Card = styled.div`
  width: 38rem;
  height: 10rem;
  left: 40rem;
  padding: 1rem 1rem;

  border: 5px solid #eb0000;
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-width: 1080px) {
    width: 100%;
    height: 15rem;
    top: 0;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 15rem;
    top: 0;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;

    @media (max-width: 1080px) {
      font-size: 0.8rem;
    }

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

  @media (max-width: 1080px) {
    width: 100%;
    height: 15rem;
    top: 0;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 15rem;
    top: 0;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;

    @media (max-width: 1080px) {
      font-size: 0.8rem;
    }

    @media (max-width: 720px) {
      font-size: 0.9rem;
    }
  }
`;
