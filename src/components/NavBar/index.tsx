import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.png';
import * as S from './styles';

function Navbar() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <Link to='/'>
            <S.LeftImg src={Logo} alt='Logo Arabets' />
          </Link>
        </S.Left>
        <S.Center>
          <S.Title>Arabet's Corner</S.Title>
        </S.Center>
        <S.Right />
      </S.Wrapper>
    </S.Container>
  );
}

export default Navbar;
