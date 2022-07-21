import styled from "styled-components";
import {Link} from 'react-router-dom';


const media = {
  mobile700: '@media(max-width: 700px)',
  mobile595: '@media(max-width: 595px)',
  mobile630: '@media(max-height: 630px)',
  mobile490: '@media(max-width: 490px)',
}

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.h1`
  margin: 30px;
  text-align: center;
  font-size: 20px;
`;

export const ContainerSubTitle = styled.p`
  margin: 15px 30px;
  text-align: center;
`;

export const ContainerGroup = styled.h1`
  margin: 0 30px;
  margin-top: 30px;
  text-align: center;
  font-weight: 900;
  font-size: 35px;
  letter-spacing: 5px;
`;

export const ContainerGroupPrice = styled.h2`
  margin: 0 30px;
  text-align: center;
  font-size: 30px;
  font-weight: 300;
`;

export const ContainerGroupPriceRed = styled.h2`
  font-size: 30px;
  font-weight: 300;
  color: red;
  text-decoration: line-through;
`;

export const ContainerGroupPriceGreen = styled.h2`
  font-size: 30px;
  font-weight: 900;
  font-size: 40px;
  color: #12e816;
  letter-spacing: 2px;
  margin: 0;
  margin-top: -25px;
`;

export const ContainerGroupPriceView = styled.h2`
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 0;
`;


export const SaleButton = styled.a`
  width: 14rem;
  height: 45px;
  display: flex;
  padding: 0 20px;
  border-radius: 20px;
  background-color: #12e816;
  color: #383838;
  border: 1px solid #12e816;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  margin-top: 20px;
  transition: 0.3s;
  box-shadow: 0 0 1em #12e816;
  cursor: pointer;

  &:hover {
    background-color: #383838;
    color: #FFF;
    border-color: #fff;
  }
`;

export const PriceWarning = styled.span`
  font-weight: 400;
  font-size: 15px;
  margin-top: 15px;
`;

export const SubTitle = styled.h3`
  font-weight: 900;
  font-size: 30px;
  margin-top: 80px;
`;

export const ContentItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  text-align: center;
`;

export const TextPresentation = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  text-align: center;
`;

export const SaleButtonFinal = styled.a`
  width: 16rem;
  height: 50px;
  display: flex;
  padding: 0 20px;
  border-radius: 20px;
  background-color: #12e816;
  color: #383838;
  border: 1px solid #12e816;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  margin-top: 30px;
  margin-bottom: 6rem;
  transition: 0.3s;
  box-shadow: 0 0 1em #12e816;
  cursor: pointer;

  &:hover {
    background-color: #383838;
    color: #FFF;
    border-color: #fff;
  }
`;

export const CentralizingContent = styled.div`
  align-items: center;
  justify-content: center;
  width: 37vh;
  height: 40rem;
  margin-bottom: 5rem;
`;

export const CentralizingContentSecondary = styled.div`
  align-items: center;
  justify-content: center;
  width: 37vh;
  height: 40rem;
  margin-bottom: -5rem;
`;
