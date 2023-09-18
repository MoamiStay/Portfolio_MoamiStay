import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  position: relative;
  top: 30px;
`;

export const Bg = styled.div`
  @media screen and (max-width: 610px) {
    width: 100%;
    background-color: #180b33;
  }
`;

export const Eval = styled.div`
  line-height: 20px;
  font-size: 1rem;
  font-weight: 300;
  margin: -60px auto 0 auto;
  max-width: 60%;
  text-align: left;
`;

export const CardContainer = styled.div`
  max-width: 60%;
`;
