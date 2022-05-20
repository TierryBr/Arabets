import styled from "styled-components";
import {Link} from 'react-router-dom';

import Logo from '../../img/banner.png';

const media = {
  mobile898: '@media(max-width: 898px)',
  mobile820: '@media(max-width: 820px)',
  mobile750: '@media(max-width: 750px)',
  mobile530: '@media(max-width: 530px)',
  mobile450: '@media(max-width: 450px)',
  mobile405: '@media(max-width: 405px)',
  mobile380: '@media(max-width: 380px)',
  mobile1000: '@media(max-height: 1000px)',
  mobile756: '@media(max-height: 756px)',
  mobile670: '@media(max-height: 670px)',
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  ${media.mobile898} {
    flex-direction: column;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
    height: 80vh;
  }
  ${media.mobile530} {
    height: 60vh;
  }
  ${media.mobile380} {
    height: 50vh;
  }
`;

export const ContainerTitle = styled.h1`
  display: flex;
  flex: 0.9;
  font-size: 40px;
  font-weight: 700;
  line-height: 4rem;
  padding: 0 17rem;
  margin-bottom: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  ${media.mobile750} {
    padding: 0 8rem;
  }
  ${media.mobile530} {
    padding: 0 5rem;
    font-size: 30px;
  }
  ${media.mobile380} {
    padding: 0 5rem;
    font-size: 20px;
  }
`;

export const Sociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  ${media.mobile820} {
    padding: 10px 0;
  }
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
  ${media.mobile750} {
    margin: 0 10px;
  }
  ${media.mobile450} {
    width: 70px;
    height: 70px;
  }
`;

export const Info = styled.div`
  height: 100vh;
  background-color: #383838;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  ${media.mobile898} {
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    height: 80vh;
  }
  ${media.mobile530} {
    height: 70vh;
  }
  ${media.mobile380} {
    height: 90vh;
  }
  ${media.mobile1000} {
    height: 90vh;
  }
  ${media.mobile756} {
    height: 100vh;
  }
`;

export const InfoTelegram = styled.div`
  height: 100vh;
  background-color: #383838;
  position: relative;
  margin-top: 4rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  ${media.mobile898} {
    height: 80vh;
  }
  ${media.mobile530} {
    height: 70vh;
  }
  ${media.mobile380} {
    height: 90vh;
  }
  ${media.mobile1000} {
    height: 90vh;
  }
  ${media.mobile756} {
    height: 100vh;
  }
`;

export const InfoDetails = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  ${media.mobile898} {
    height: 80vh;
  }
  ${media.mobile530} {
    height: 60vh;
    padding: 5rem 0;
  }
  ${media.mobile380} {
    height: 75vh;
  }
  ${media.mobile1000} {
    height: 80vh;
  }
  ${media.mobile756} {
    height: 90vh;
  }
`;

export const InfoDetailsTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #fff;
  ${media.mobile898} {
    display: flex;
    padding: 0 10rem;
  }
  ${media.mobile750} {
    padding: 0 8rem;
  }
  ${media.mobile530} {
    padding: 0 5rem;
    font-size: 30px;
  }
  ${media.mobile380} {
    font-size: 25px;
  }
`;

export const InfoDetailsSubTitle = styled.h3`
  font-size: 40px;
  font-weight: 400;
  color: #fff;
  ${media.mobile530} {
    font-size: 30px;
  }
  ${media.mobile405} {
    font-size: 20px;
  }
  ${media.mobile670} {
    font-size: 19px;
  }
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
  ${media.mobile898} {
    display: flex;
    padding: 0 2rem;
  }
  ${media.mobile405} {
    font-size: 16px;
  }
  ${media.mobile670} {
    font-size: 15px;
  }
`;

export const ItemLI = styled.li`
  margin-bottom: 5px;
  color: white;
`;

export const InfoDetailsButton = styled(Link)`
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

  ${media.mobile670} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const InfoDetailsButtonTelegram = styled.a`
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

  ${media.mobile670} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
