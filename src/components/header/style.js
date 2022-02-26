import styled from 'styled-components';


export const Container = styled.header`
  text-align: center;
  overflow: hidden;

  video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25rem;
  z-index: -2;
  object-position: center;
  object-fit: cover;
}

`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5rem;
  }
`
export const ContainerLink = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40rem;

  a {
    text-decoration: none;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7rem;
    height: 8rem;
  }
  
  a:hover {
    width: 7rem;
    height: 8rem;
    top: 0px;
    background: #E43145;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    margin-right: 1rem;
  }

`
