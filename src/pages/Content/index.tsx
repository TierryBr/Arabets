import { TelegramLogo, Download } from 'phosphor-react';

import NavBar from '../../components/NavBar';
import * as S from './styles';

function Content() {
  return (
    <>
      <NavBar />
      {/* <S.ContainerHeader>
        <h1>Minicurso gratuito</h1>
      </S.ContainerHeader> */}
      <S.Container>
        <S.ContainerIframe>
          <iframe
            width='100%'
            height='300'
            src='https://www.youtube.com/embed/dwbf9JXJfIM'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Vídeo'
          />
          <S.ContainerIframeTitle>
            Aula 01 - Apresentação e boas-vindas
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <iframe
            width='100%'
            height='300'
            src='https://www.youtube.com/embed/ZywRIVkVZ0g'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Vídeo'
          />
          <S.ContainerIframeTitle>
            Aula 02 - Fazendo a gestão de banca
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <iframe
            width='100%'
            height='300'
            src='https://www.youtube.com/embed/vhYx1ID0UXg'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Vídeo'
          />
          <S.ContainerIframeTitle>
            Aula 03 - Criando uma conta na bet 365 em 2022
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <iframe
            width='100%'
            height='300'
            src='https://www.youtube.com/embed/GBAUCHPIg2Q'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Vídeo'
          />
          <S.ContainerIframeTitle>
            Aula 04 - O método que faz a gente ganhar dinheiro todo dia
          </S.ContainerIframeTitle>
        </S.ContainerIframe>

        <S.ContainerIframe>
          <iframe
            width='100%'
            height='300'
            src='https://www.youtube.com/embed/OWQy-apLbWc'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Vídeo'
          />
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
            <S.InfoDetailsButtonTelegram href='https://drive.google.com/u/0/uc?id=1kgSl9iLWyw96Z6przmVK7kLwSHSVPbqw&export=download'>
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
