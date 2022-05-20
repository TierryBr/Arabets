import NavBar from '../../components/NavBar';
import * as S from './styles';

function Query() {
  return (
    <>
      <NavBar />
      <S.Container>
        <div>
          <S.ContainerTitle>
            Como eu baixo o material de apoio gratuito ?
          </S.ContainerTitle>
          <p>
            Um grupo FREE com mais de Mil pessoas que ajudamos todos os dias; Um
            grupo exclusivo de suporte, totalmente gratuito; Greens exclusivos e
            constantes, além de dicas no grupo; Um mini-curso gratuito em vídeo
            que vai te ensinar a fazer o básico bem feito; Materiais de apoio
            exclusivos: Planilha, PDF's e muito mais.
          </p>

          <S.ContainerTitle>O que vem por aí ?</S.ContainerTitle>
          <p>
            Estamos preparando um material nunca antes visto, com tudo aquilo
            que sabemos e aprendemos, com muuito mais vantagens para você. Siga
            a gente no Instagram para ser avisado e não perder essa
            oportunidade, porque as vagas serão limitadas. Aguarde!
          </p>
        </div>
      </S.Container>
    </>
  );
}

export default Query;
