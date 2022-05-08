import React from "react";
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.png';

import * as S from './styles';

function Navbar() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <Link to="/">
            <img src={Logo} width="100" height="90"/>
          </Link>
        </S.Left>
        <S.Center>
          <S.Title>Arabet's Corner</S.Title>
        </S.Center>
        <S.Right>
          <S.MenuItem>
            <S.InfosNavBar to="/about">
              <S.TextInfosNavBar>Sobre</S.TextInfosNavBar>
            </S.InfosNavBar>
            <S.InfosNavBar to="/">
              <S.TextInfosNavBar>Dúvidas</S.TextInfosNavBar>
            </S.InfosNavBar>
          </S.MenuItem>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
