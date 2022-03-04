import seta from '../../assets/ENFEITESETA.svg'
import seta1 from '../../assets/Group.svg'
import { Container } from './style'

export const Atividades = () => {
  return(
    <>
      <Container>
        <img src={seta} alt="enfeite de seta"/>
        <h1>Atividades</h1>
        <img src={seta1} alt="enfeite de seta grande"/>
        <h2>Atividades</h2>
      </Container>
    </>
  )
}