import styled from 'styled-components';

export const IntroMain = styled.main`
  margin: 0 auto 0 360px;
  padding: 75px 0 200px;
  button {
    display: block;
    &::before, &::after {
      display: none !important;
    }
  }
  figure {
    float: right;
    max-width: 300px;
  }
  @media screen and (max-width: 700px) {
    padding: 75px 20px 200px;
  }
`;

export const H2 = styled.h1`background-color: pink;`;
