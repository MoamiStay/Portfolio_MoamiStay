import styled from "styled-components";

export const MobileAnimation = styled.div`
  display: flex;
  max-width: 100%;
  padding-bottom: 20px;
  justify-content: center;
  margin: auto;
  @media screen and (min-width: 610px) {
    max-width: 50%;
  }
  @media screen and (min-width: 860px) {
    justify-content: flex-end;
    max-width: 30%;
  }
`;

export const Container = styled.div`
  display: Flex;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const PfImg = styled.img`
  max-width: 50%;
`;

export const AboutText = styled.div`
  max-width: 50%;
  @media screen and (max-width: 780px) {
    max-width: 80%;
  }
`;
