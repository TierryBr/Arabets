import { css } from 'styled-components';

export const mobile = (props: any) => css`
  @media only screen and (max-width: 380px) {
    ${props}
  }

  @media only screen and (max-width: 756px) {
    ${props}
  }

  @media only screen and (max-width: 898px) {
    ${props}
  }

  @media only screen and (max-width: 563px) {
    ${props}
  }
`;
