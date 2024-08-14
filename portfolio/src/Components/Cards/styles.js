import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  /* max-height: 300px; */
  object-fit: contain;
  /* position: relative;
  top: 30px; */
`;

export const ContentStyle = styled.h3`
  color: '#fff';
  background: '#fafafa0';
`

export const Bg = styled.div`
  @media screen and (max-width: 610px) {
    width: 100%;
    background-color: #180b33;
  }
`;

export const Eval = styled.div`
  /* line-height: 20px; */
  font-size: 1rem;
  font-weight: 300;
  /* margin: -60px auto 0 auto; */
  /* max-width: 60%; */
  /* text-align: left; */
`;

export const CardContainer = styled.div`
  max-width: 60%;
`;

export const CardSection = styled.section`
width: 60%;
margin: auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 gap: 10px;

 @media screen and (max-width: 1280px) {
    width: 60%;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 840px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const MenuItems = styled.div`
display: flex;
justify-content: space-around;
width: 20%;
margin: auto;
padding-top: 50px;

`;
