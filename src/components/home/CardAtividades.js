import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import image1 from "../../assets/surf.jpg";

export default function CardAtividades() {
  return (
    <Container>
      <Card sx={{ maxWidth: 300 }} className="card-atividades">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="escalada"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ESCALADA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              As crianças da favela já escalam muros, árvores e lajes, brincando
              e correndo atrás de pipas, a escalada já está intrínseca em seus
              DNAS. Nosso objetivo é valorizar essas habilidades, proporcionando
              a eles acesso democratizado ao esporte, com boa infraestrutura,
              segurança e técnica.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="card-atividades">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ROBÓTICA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Na favela existe a cultura da “gambiarra”, habilidade de criar e
              recriar soluções com o que tiver de material disponível, mesmo que
              escasso. Apresentando às crianças e jovens o universo do Maker,
              damos novos significados para objetos que seriam descartados e
              jamais reutilizados, unindo tecnologia e sustentabilidade com o
              potencial intrínseco da cultura local.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="card-atividades">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              PROGRAMAÇÃO
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Oficina que permite com que dessa vez a Favela saia na frente,
              qualificando e formando jovens da favela em programadores,
              antecipando uma necessidade do mercado de trabalho nessa área, que
              está em acelerada expansão, colocando a favela no cenário de
              captação de profissionais nesse segmento.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="card-atividades">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              FORMAÇÃO SÓCIO EMOCIONAL
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Entendemos que o desenvolvimento sócio emocional deveria ter um
              espaço nas nossas construções enquanto seres humanos desde
              crianças, mas não é a realidade, muito menos na favela. E
              considerando que a inserção no mercado de trabalho é um grande
              desafio na vida dos jovens, através desse programa, nosso objetivo
              é dar apoio o emocional desses alunos, através de dinâmicas,
              mentorias e acompanhamento psicoterapêutico, empoderando-os para
              um melhor aproveitamento deles no mercado e na vida.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
