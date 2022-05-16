import {
  InstagramLogo,
} from 'phosphor-react';

import NavBar from '../../components/NavBar';
import Logo from '../../img/logo.png';
import * as S from './styles';


function About() {
  return (
    <>
      <NavBar />
      <S.Container>
        <div>
          <h1>Sobre nós</h1>
          <p>Somos dois amigos, criadores da Arabet’s Corner, com anos de experiência
            em Trade Esportivo, que resolveu se juntar para ensinar pessoas a terem
            uma renda extra, assim com nós, juntando suas paixões: futebol e apostas esportivas.
          </p>
          <S.InfoDetailsButton href='https://www.instagram.com/arabets_corner/?utm_medium=copy_link' target='_blank'>
            <InstagramLogo
              size='20'
              weight='regular'
              style={{ marginRight: 10 }}
            />
            SAIBA MAIS
          </S.InfoDetailsButton>
        </div>
        <div style={{padding: 80}}>
          <img src={Logo} width='200' height='180' alt='Logo Arabets' />
        </div>
      </S.Container>
    </>
  );
}

export default About;
