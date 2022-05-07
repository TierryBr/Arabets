import React from "react";

import Logo from '../../img/logo.png';

import * as S from './styles';

function Navbar() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <a href="#">
            <img src={Logo} width="100" height="90"/>
          </a>
        </S.Left>
        <S.Center>
          <S.Title>Arabet's Corner</S.Title>
        </S.Center>
        <S.Right>
          <S.MenuItem>
            <S.InfosNavBar href="#">
              <S.TextInfosNavBar>Sobre</S.TextInfosNavBar>
            </S.InfosNavBar>
            <S.InfosNavBar href="#">
              <S.TextInfosNavBar>Dúvidas</S.TextInfosNavBar>
            </S.InfosNavBar>
          </S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
