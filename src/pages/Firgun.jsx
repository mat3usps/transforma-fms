import { Typography, Box, Button } from "@material-ui/core";
import StyledParagraph from "../components/StyledParagraph";

import Logo from "../assets/images/logo-firgun.png";

const Firgun = () => {
  return (
    <Box>
      <Box>
        <img src={Logo} alt="Empresa parceira" />
      </Box>

      <Box>
        <StyledParagraph>
          A Firgun é uma fintech social que trabalha com microcrédito. Fundada
          em 2017, já beneficiou mais de 350 empreendedores de todo o Brasil,
          com mais de 1.3 milhões de reais em microcrédito
        </StyledParagraph>
        <StyledParagraph>
          Já foi premiada pela Iniciativa Incluir (ONU e Sebrae) como Melhor
          Ideia Inovadora e foi acelerada pela Social Good Brasil, InovAtiva
          entre outras organizações.
        </StyledParagraph>
        <StyledParagraph>
          Agregado a isso, junto com alunos de pós-graduação e graduação da
          Universidade de Oxford, desenvolveu um trabalho para criação de uma
          metodologia de mensuração de impacto voltado para a realidade dos
          microempreendedores brasileiros.
        </StyledParagraph>
      </Box>

      <Box fullWidth display="flex" justifyContent="center" marginTop="15px">
        <Button variant="outlined">
          <a
            href="https://www.firgun.com.br/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <Typography>Visite Nosso Site</Typography>
          </a>
        </Button>
      </Box>
    </Box>
  );
};

export default Firgun;
