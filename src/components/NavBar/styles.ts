import styled from "styled-components";
import { Link } from 'react-router-dom';

import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  background-color: #236F52;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "50px" })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #FFF;
  ${mobile({ fontSize: "24px" })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ marginRight: "20px" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  color: #FFF;
  text-decoration: none;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const InfosNavBar = styled(Link)`
  color: #FFF;
  text-decoration: none;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const TextInfosNavBar = styled.a`
  font-size: 15px;
  font-weight: 400;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  &:hover {
    color: #e1dfdf;
  }
`;
