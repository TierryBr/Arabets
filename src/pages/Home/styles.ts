import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #383838;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  ${mobile({ flexDirection: "column" })}
`;

export const ContainerTitle = styled.h1`
  display: flex;
  flex: 1;
  font-size: 40px;
  font-weight: 700;
  line-height: 4rem;
  padding: 0 17rem;
  margin-bottom: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Sociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const SocialItemImg = styled.a`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 50px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  height: 100vh;
  background-color: #383838;
  position: relative;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
`;

export const InfoTelegram = styled.div`
  height: 100vh;
  background-color: #383838;
  position: relative;
  margin-top: 4rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

export const InfoDetails = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
`;

export const InfoDetailsTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #fff;
`;

export const InfoDetailsSubTitle = styled.h3`
  font-size: 40px;
  font-weight: 400;
  color: #fff;
`;

export const InfoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 0.85;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const InfoDetailsDescription = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const ItemLI = styled.li`
  margin-bottom: 5px;
  color: white;
`;

export const InfoDetailsButton = styled.a`
  width: 12rem;
  height: 45px;
  display: flex;
  padding: 0 20px;
  border-radius: 20px;
  background-color: #33801B;
  color: white;
  border: 1px solid gray;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 60px;
  cursor: pointer;

  &:hover {
    background-color: #286d13;
  }
`;