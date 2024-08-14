import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #251543;
  border-radius: 30px;
  padding: 20px;
`;

export const AniContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  max-width: 50%;
  margin: auto;
  @media screen and (min-width: 575px) {
    max-width: 20%;
  }
  @media screen and (min-width: 1200px) {
    max-width: 10%;
  }
`;

export const BottomFooter = styled.footer`
margin-top: 100px;
display: flex;
justify-content: space-around;
background-color: #180b33;
`;

export const TextBox = styled.div`
margin-top: 10px;
font-size: small;
padding: 3px;
`;