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
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Icons = styled.div`
  display: flex;
`;
