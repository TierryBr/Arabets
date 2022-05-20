import styled from "styled-components";
import { Link } from 'react-router-dom';

const media = {
  mobile898: '@media(max-width: 898px)',
  mobile575: '@media(max-width: 575px)',
  mobile400: '@media(max-width: 400px)',
}

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #236F52;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile575} {
    height: 56px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
`;

export const LeftImg = styled.img`
  width: 100px;
  height: 90px;
  ${media.mobile400} {
    width: 80px;
    height: 70px;
  }
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #FFF;
  ${media.mobile898} {
    font-size: 24px;
  }
  ${media.mobile575} {
    font-size: 20px;
  }
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  color: #FFF;
  text-decoration: none;
  margin-left: 25px;
`;

export const InfosNavBar = styled(Link)`
  color: #FFF;
  text-decoration: none;
  cursor: pointer;
  margin-left: 25px;
`;

export const TextInfosNavBar = styled.a`
  font-size: 15px;
  font-weight: 400;

  &:hover {
    color: #e1dfdf;
  }
`;
