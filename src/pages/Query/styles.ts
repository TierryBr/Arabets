import styled from "styled-components";

const media = {
  mobile700: '@media(max-width: 700px)',
  mobile595: '@media(max-width: 595px)',
  mobile630: '@media(max-height: 630px)',
  mobile490: '@media(max-width: 490px)',
}

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 5rem;
  height: 50vh;
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 2rem;
  border-radius: 10px;
  background-color: #383838;

  ${media.mobile700} {
    flex-direction: column;
    width: 80%;
    height: 85vh;
  }
  ${media.mobile630} {
    height: 90vh;
  }
  ${media.mobile595} {
    height: 100vh;
  }
`;

export const ContainerTitle = styled.h1`
  margin-top: 30px;
  ${media.mobile490} {
    font-size: 20px;
  }
`;
