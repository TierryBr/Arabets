import styled from "styled-components";
import {Link} from 'react-router-dom';

const media = {
  mobile898: '@media(max-width: 898px)',
}

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 5rem;
  height: 50vh;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  background-color: #383838;
`;

export const InfoDetailsButton = styled.a`
  width: 12rem;
  height: 45px;
  display: flex;
  padding: 0 20px;
  border-radius: 20px;
  background-color: #FFE03B;
  color: #383838;
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
    background-color: #383838;
    color: #FFF;
    border-color: #fff;
  }
`;
