import styled from "styled-components";

export const Container = styled.section`
  margin-top: 50px;
  display: flex;
  background-color: #251543;
  border-radius: 30px;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  margin: 25px;
  @media screen and (min-width: 611px) {
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  max-width: 15rem;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
`;
