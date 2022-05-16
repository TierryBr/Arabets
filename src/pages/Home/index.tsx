import {
  TelegramLogo,
  UserCirclePlus,
  YoutubeLogo,
  InstagramLogo,
  MonitorPlay,
} from 'phosphor-react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import * as S from './styles';

function Home() {
  return (
    <>
      <NavBar />
      <S.Container>
        <S.ContainerTitle>
          GANHE DINHEIRO TODOS OS DIAS, ATRAVÉS DAS APOSTAS ESPORTIVAS
        </S.ContainerTitle>
      </S.Container>

      <S.Sociais>
        <S.SocialItemImg
          color='30A8DE'
          href='https://t.me/arabetsfutebol'
          target='_blank'
        >
          <TelegramLogo size='50' weight='fill' />
        </S.SocialItemImg>
        <S.SocialItemImg
          color='33801B'
          href='https://t.me/suporte_arabets'
          target='_blank'
        >
          <UserCirclePlus size='50' weight='fill' />
        </S.SocialItemImg>
        <S.SocialItemImg
          color='C43230'
          href='https://www.youtube.com/channel/UCd8wp_6XTZ9Do1Ua0INSvZg?app=desktop'
          target='_blank'
        >
          <YoutubeLogo size='50' weight='fill' />
        </S.SocialItemImg>
        <S.SocialItemImg
          color='D54B77'
          href='https://www.instagram.com/arabets_corner/?utm_medium=copy_link'
          target='_blank'
        >
          <InstagramLogo size='50' weight='fill' />
        </S.SocialItemImg>
      </S.Sociais>

      <S.Info>
        <S.InfoDetails>
          <S.InfoDetailsContainer>
            <S.InfoDetailsTitle>
              ACESSE NOSSO MINICURSO GRATUITO
            </S.InfoDetailsTitle>
            <S.InfoDetailsSubTitle>E APRENDA A</S.InfoDetailsSubTitle>
          </S.InfoDetailsContainer>
          <S.InfoDetailsDescription>
            <ul>
              <S.ItemLI>
                A CRIAR UMA CONTA NA BET 365 (ATUALIZADO 2022);
              </S.ItemLI>
              <S.ItemLI>A TER UM MINDSET VENCEDOR;</S.ItemLI>
              <S.ItemLI>
                DOIS MÉTODOS QUE VÃO TE AJUDAR A GANHAR DINHEIRO HOJE;
              </S.ItemLI>
              <S.ItemLI>
                A COMO TER UMA RENDA EXTRA CONSTANTEMENTE E ESCALONÁVEL;
              </S.ItemLI>
              <S.ItemLI>E MAIS TRÊS BÔNUS;</S.ItemLI>
            </ul>

            <S.InfoDetailsButton to='/content'>
              <MonitorPlay
                size='20'
                weight='regular'
                style={{ marginRight: 10 }}
              />
              ACESSE AGORA
            </S.InfoDetailsButton>
          </S.InfoDetailsDescription>
        </S.InfoDetails>
      </S.Info>

      <S.InfoTelegram>
        <S.InfoDetails>
          <S.InfoDetailsContainer>
            <S.InfoDetailsTitle>
              ENTRE PARA NOSSO GRUPO DO TELEGRAM
            </S.InfoDetailsTitle>
            <S.InfoDetailsSubTitle>E TENHA ACESSO A</S.InfoDetailsSubTitle>
          </S.InfoDetailsContainer>
          <S.InfoDetailsDescription>
            <ul>
              <S.ItemLI>GREENS EXCLUSIVOS;</S.ItemLI>
              <S.ItemLI>SUPORTE GRATUITO;</S.ItemLI>
              <S.ItemLI>CONTEÚDOS PARA DOWNLOAD;</S.ItemLI>
              <S.ItemLI>DICAS DO MOMENTO;</S.ItemLI>
              <S.ItemLI>ATUALIZAÇÕES E MUITO MAIS;</S.ItemLI>
            </ul>

            <S.InfoDetailsButtonTelegram
              href='https://t.me/arabetsfutebol'
              target='_blank'
            >
              <TelegramLogo
                size='20'
                weight='regular'
                style={{ marginRight: 10 }}
              />
              ENTRE AGORA
            </S.InfoDetailsButtonTelegram>
          </S.InfoDetailsDescription>
        </S.InfoDetails>
      </S.InfoTelegram>
      <Footer />
    </>
  );
}

export default Home;
