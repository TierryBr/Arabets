import styled from "styled-components";
import {Link} from 'react-router-dom';

const media = {
  mobile900: '@media(max-width: 900px)'
}

export const Container = styled.div`
  display: flex;
  ${media.mobile900} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1`
  color: #FFF;
`;

export const Desc = styled.p`
  margin: 20px 0px;
  color: gray;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const Terms = styled.a`
  color: #FFF;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
  color: #FFF;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const ListItemLink = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  color: #FFF;

  &:hover {
    color: gray;
  }
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
    width: 50%;
`;
