import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  ${mobile({ flexDirection: "column" })}
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

export const ContainerIframe = styled.div`
  max-width: 35%;
  width: 100%;
  padding: 10px;
  margin: 20px;
  border: 1px solid #236F52;
  border-radius: 20px;
`;

export const ContainerIframeTitle = styled.h1`
  max-width: 75%;
  font-size: 24px;
  font-weight: 400;
`;

export const InfoDetailsButtonTelegram = styled.a`
  width: 12rem;
  height: 45px;
  display: flex;
  padding: 0 20px;
  border-radius: 20px;
  background-color: #FFE03B;
  color: #282828;
  border: 1px solid #FFE03B;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 60px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #282828;
    color: #FFF;
    border-color: #fff;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8rem;
`;

export const ContainerFooterTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5rem;
`;

export const ContainerFooterButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;