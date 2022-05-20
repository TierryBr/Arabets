import { TelegramLogo, InstagramLogo } from 'phosphor-react';

import * as S from './styles';

function Footer() {
  return (
    <S.Container>
      <S.Left>
        <S.Logo>ARABETS.</S.Logo>
        <S.Desc>2022 Arabets. Todos os direitos reservados.</S.Desc>
        <S.Desc style={{ fontSize: 10 }}>
          A{' '}
          <S.Terms href='https://policies.google.com/privacy' target='_blank'>
            Política de Privacidade
          </S.Terms>{' '}
          e os{' '}
          <S.Terms href='https://policies.google.com/terms' target='_blank'>
            Termos de Serviço
          </S.Terms>{' '}
          do Google são aplicados.
        </S.Desc>
      </S.Left>
      <S.Center>
        <S.Title>Links úteis</S.Title>
        <S.List>
          <S.ListItem>
            <S.ListItemLink to='/'>Home</S.ListItemLink>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemLink to='/about'>Sobre nós</S.ListItemLink>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemLink to='/query'>Dúvidas</S.ListItemLink>
          </S.ListItem>
          <S.ListItem>
            <S.ListItemLink to='/content'>Conteúdo</S.ListItemLink>
          </S.ListItem>
        </S.List>
      </S.Center>
      <S.Right>
        <S.Title>Redes Sociais</S.Title>
        <S.ContactItem>
          <S.SocialContainer>
            <S.SocialIcon
              color='30A8DE'
              href='https://t.me/arabetsfutebol'
              target='_blank'
            >
              <TelegramLogo size='20' weight='fill' />
            </S.SocialIcon>
            <S.SocialIcon
              color='D54B77'
              href='https://www.instagram.com/arabets_corner/?utm_medium=copy_link'
              target='_blank'
            >
              <InstagramLogo size='20' weight='fill' />
            </S.SocialIcon>
          </S.SocialContainer>
        </S.ContactItem>
      </S.Right>
    </S.Container>
  );
}

export default Footer;
