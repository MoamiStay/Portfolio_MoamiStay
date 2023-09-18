import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 575px) {
  }
`;

export const Title = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
`;

export const DesktopAnimation = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

export const MobileAnimation = styled.div`
  display: flex;
  max-width: 100%;
  @media screen and (min-width: 405px) {
    max-width: 70%;
    margin: 0;
  }
  @media screen and (min-width: 610px) {
    margin: auto;
    margin-left: 300px;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Icons = styled.div`
  display: flex;
`;
