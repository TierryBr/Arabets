import React, { useState } from 'react';
import { TelegramLogo, Download, PlayCircle } from 'phosphor-react';

import NavBar from '../../components/NavBar';
import * as S from './styles';

function Content() {
  const [video1, setVideo1] = useState(false);
  const [video2, setVideo2] = useState(false);
  const [video3, setVideo3] = useState(false);
  const [video4, setVideo4] = useState(false);
  const [video5, setVideo5] = useState(false);
  return (
    <>
      <NavBar />
      {/* <S.ContainerHeader>
        <h1>Minicurso gratuito</h1>
      </S.ContainerHeader> */}
      <S.Container>
        <S.ContainerIframe>
          <S.ContainerIframeDiv
            style={{
              backgroundImage:
                'url(https://img.youtube.com/vi/dwbf9JXJfIM/0.jpg)',
            }}
          >
            <S.ContainerIframeButton
              style={{ display: !video1 ? 'block' : 'none' }}
              onClick={() => setVideo1(true)}
            >
              <PlayCircle size='90' weight='bold' color='#fff' />
            </S.ContainerIframeButton>
            {video1 ? (
              <iframe
                width='100%'
                height='300'
                src='https://www.youtube.com/embed/dwbf9JXJfIM?autoplay=1'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Vídeo'
              />
            ) : null}
          </S.ContainerIframeDiv>
          <S.ContainerIframeTitle>
            Aula 01 - Apresentação e boas-vindas
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <S.ContainerIframeDiv
            style={{
              backgroundImage:
                'url(https://img.youtube.com/vi/ZywRIVkVZ0g/0.jpg)',
            }}
          >
            <S.ContainerIframeButton
              style={{ display: !video2 ? 'block' : 'none' }}
              onClick={() => setVideo2(true)}
            >
              <PlayCircle size='90' weight='bold' color='#fff' />
            </S.ContainerIframeButton>
            {video2 ? (
              <iframe
                width='100%'
                height='300'
                src='https://www.youtube.com/embed/ZywRIVkVZ0g?autoplay=1'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Vídeo'
              />
            ) : null}
          </S.ContainerIframeDiv>
          <S.ContainerIframeTitle>
            Aula 02 - Fazendo a gestão de banca
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <S.ContainerIframeDiv
            style={{
              backgroundImage:
                'url(https://img.youtube.com/vi/vhYx1ID0UXg/0.jpg)',
            }}
          >
            <S.ContainerIframeButton
              style={{ display: !video3 ? 'block' : 'none' }}
              onClick={() => setVideo3(true)}
            >
              <PlayCircle size='90' weight='bold' color='#fff' />
            </S.ContainerIframeButton>
            {video3 ? (
              <iframe
                width='100%'
                height='300'
                src='https://www.youtube.com/embed/vhYx1ID0UXg?autoplay=1'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Vídeo'
              />
            ) : null}
          </S.ContainerIframeDiv>
          <S.ContainerIframeTitle>
            Aula 03 - Criando uma conta na bet 365 em 2022
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <S.ContainerIframeDiv
            style={{
              backgroundImage:
                'url(https://img.youtube.com/vi/GBAUCHPIg2Q/0.jpg)',
            }}
          >
            <S.ContainerIframeButton
              style={{ display: !video4 ? 'block' : 'none' }}
              onClick={() => setVideo4(true)}
            >
              <PlayCircle size='90' weight='bold' color='#fff' />
            </S.ContainerIframeButton>
            {video4 ? (
              <iframe
                width='100%'
                height='300'
                src='https://www.youtube.com/embed/GBAUCHPIg2Q?autoplay=1'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Vídeo'
              />
            ) : null}
          </S.ContainerIframeDiv>
          <S.ContainerIframeTitle>
            Aula 04 - O método que faz a gente ganhar dinheiro todo dia
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <S.ContainerIframeDiv
            style={{
              backgroundImage:
                'url(https://img.youtube.com/vi/OWQy-apLbWc/0.jpg)',
            }}
          >
            <S.ContainerIframeButton
              style={{ display: !video5 ? 'block' : 'none' }}
              onClick={() => setVideo5(true)}
            >
              <PlayCircle size='90' weight='bold' color='#fff' />
            </S.ContainerIframeButton>
            {video5 ? (
              <iframe
                width='100%'
                height='300'
                src='https://www.youtube.com/embed/OWQy-apLbWc?autoplay=1'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Vídeo'
              />
            ) : null}
          </S.ContainerIframeDiv>
          <S.ContainerIframeTitle>
            Aula 05 - Encerramento e presentes
          </S.ContainerIframeTitle>
        </S.ContainerIframe>
      </S.Container>
      <S.ContainerFooter>
        <S.ContainerFooterTitle>
          Aprenda o método que usamos para ter uma renda extra no mercado de
          escanteios
        </S.ContainerFooterTitle>
        <S.ContainerFooterButton>
          <S.ContainerFooterButtonTelegram>
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
          </S.ContainerFooterButtonTelegram>

          <div>
            <S.InfoDetailsButtonTelegram href='https://drive.google.com/u/0/uc?id=1HPM4simYfbyQreVexyi8AY28HPz2D9uN&export=download'>
              <Download
                size='20'
                weight='regular'
                style={{ marginRight: 10 }}
              />
              BAIXE OS BÔNUS
            </S.InfoDetailsButtonTelegram>
          </div>
        </S.ContainerFooterButton>
      </S.ContainerFooter>
    </>
  );
}

export default Content;
