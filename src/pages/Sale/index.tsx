import { ArrowFatLinesDown } from 'phosphor-react';

import NavBar from '../../components/NavBar';
import CarouselList from '../../components/CarouselList';
import CarouselPhotos from '../../components/CarouselPhotos';
import Footer from '../../components/Footer';
import Logo from '../../img/logo.png';
import * as S from './styles';

function Sale() {
  return (
    <>
      <NavBar />
      <S.Container>
        <div style={{ padding: 20 }}>
          <img src={Logo} width='200' height='180' alt='Logo Arabets' />
        </div>
        <S.ContainerTitle>
          Aprenda as nossas estratégias secretas de um dos mercados mais
          lucrativos do mundo e tenha uma renda extra sem precisar sair do
          conforto de sua casa.
        </S.ContainerTitle>

        <S.ContainerSubTitle>
          Mesmo que você não tenha nenhum conhecimento, seja um iniciante e
          nunca tenha feito renda na internet.
        </S.ContainerSubTitle>

        <S.ContainerGroup>GRUPO VIP</S.ContainerGroup>
        <S.ContainerGroupPrice>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            DE &nbsp;{' '}
            <S.ContainerGroupPriceRed>R$ 1.197,00</S.ContainerGroupPriceRed>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <S.ContainerGroupPriceGreen>
              POR R$ 127,00
            </S.ContainerGroupPriceGreen>
          </div>
          <S.ContainerGroupPriceView>
            OU 12x NO CARTÃO
          </S.ContainerGroupPriceView>
        </S.ContainerGroupPrice>
        <S.SaleButton
          href='https://pay.hotmart.com/P73071153P?off=f3uykh5d&checkoutMode=10'
          target='_blank'
        >
          EU QUERO O DESCONTO
        </S.SaleButton>

        <S.PriceWarning>
          Menos de 50 centavos por dia + 7 dias de garantia!
        </S.PriceWarning>
        <ArrowFatLinesDown
          size={35}
          style={{ marginTop: 30, color: '#12e816' }}
        />
        <S.ContentItems>
          <S.SubTitle>
            Garanta <b style={{ color: 'red' }}>agora</b> mesmo essa{' '}
            <b style={{ color: 'red' }}>promoção imperdível</b> do Arabet's
            Corner e <b style={{ color: 'red' }}>aprenda</b> nossas estratégias!
          </S.SubTitle>
          <span>
            Dentro do nosso grupo vip você poderá recuperar seu investimento
            logo na primeira semana.
          </span>

          <S.SubTitle>
            Chegou a hora de lucrar todos os dias através dos sinais de nosso
            trader esportivo!
          </S.SubTitle>
          <span style={{ marginBottom: '10px' }}>
            As estratégias do Arabet's Corner foi dividida em 7 módulos, para
            facilitar sua jornada lucrativa.
          </span>
        </S.ContentItems>
        <S.SaleButton
          href='https://pay.hotmart.com/P73071153P?off=f3uykh5d&checkoutMode=10'
          target='_blank'
        >
          EU QUERO O DESCONTO
        </S.SaleButton>

        <S.ContentItems>
          <S.SubTitle>O que estão falando do Arabet's Corner ?</S.SubTitle>
        </S.ContentItems>
        <S.CentralizingContent>
          <CarouselList />
        </S.CentralizingContent>

        <S.ContainerGroup>GRUPO VIP</S.ContainerGroup>
        <S.ContainerGroupPrice>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            DE &nbsp;{' '}
            <S.ContainerGroupPriceRed>R$ 1.197,00</S.ContainerGroupPriceRed>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <S.ContainerGroupPriceGreen>
              POR R$ 127,00
            </S.ContainerGroupPriceGreen>
          </div>
          <S.ContainerGroupPriceView>
            OU 12x NO CARTÃO
          </S.ContainerGroupPriceView>
        </S.ContainerGroupPrice>
        <S.SaleButton
          href='https://pay.hotmart.com/P73071153P?off=f3uykh5d&checkoutMode=10'
          target='_blank'
        >
          EU QUERO O DESCONTO
        </S.SaleButton>
        <S.PriceWarning>
          Menos de 50 centavos por dia + 7 dias de garantia!
        </S.PriceWarning>

        <S.ContentItems>
          <S.SubTitle>Quem somos ?</S.SubTitle>
        </S.ContentItems>
        <S.CentralizingContentSecondary>
          <CarouselPhotos />
        </S.CentralizingContentSecondary>
        <S.TextPresentation>
          Somos dois amigos, Carlos Antônio e Lucas Oliveira. <br /> <br />
          Somos especialistas e trader esportivo, onde ja ajudamos mais de 3 mil
          alunos a ganharem dinheiro com a internet através de investimentos
          esportivos. <br /> <br />
          E agora criamos o Arabet’s Corner vip, para facilitar essa nova fase
          financeira em sua vida! <br /> <br />
          Posso te ajudar ?
        </S.TextPresentation>
        <S.SaleButtonFinal
          href='https://pay.hotmart.com/P73071153P?off=f3uykh5d&checkoutMode=10'
          target='_blank'
        >
          SIM, QUERO DAR O PRIMEIRO PASSO
        </S.SaleButtonFinal>

        <span
          style={{
            margin: '0 3rem',
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '12px',
          }}
        >
          “Esse produto é comercializado com apoio da Hotmart. A plataforma não
          faz controle editorial prévio dos produtos comercializados, nem avalia
          a tecnicidade e experiência daqueles que os produzem. A existência de
          um produto e sua aquisição, por meio da plataforma, não podem ser
          consideradas como garantia de qualidade de conteúdo e resultado, em
          qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente
          dessas informações. Os termos e políticas da Hotmart podem ser
          acessados aqui, antes mesmo da conclusão da compra"
        </span>
      </S.Container>
      <Footer />
    </>
  );
}

export default Sale;
