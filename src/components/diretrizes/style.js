import styled from 'styled-components';

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

    :nth-child(1) {
      position: absolute;
      width: 30rem;
      top: -18rem;
    }
  }
`

export const Card = styled.div`
  position: absolute;
  width: 38rem;
  height: 10rem;
  left: 40rem;
  top: 2rem;
  padding: 1rem 1rem;

  /* red */

  border: 5px solid #EB0000;
  box-sizing: border-box;
  border-radius: 20px;

  h4{
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
  }
`

export const Card2 = styled.div`
  position: absolute;
  width: 38rem;
  height: 10rem;
  left: 40rem;
  top: 15rem;
  padding: 1rem 1rem;

  /* red */

  border: 5px solid #EB0000;
  box-sizing: border-box;
  border-radius: 20px;

  h4{
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
  }

  img {
    width: 20rem;
    right: -2.1rem;
  }
`