import styled from "styled-components";

export const Img1 = styled.img`
  z-index: -1;
  width: 20%;
  position: absolute;
  right: 0;
  top: 100px;
  @media screen and (max-width: 611px) {
    width: 35%;
    position: absolute;
    right: 0;
    top: 150px;
  }
`;

export const Img2 = styled.img`
  z-index: -1;
  width: 25%;
  position: absolute;
  left: 0;
  top: 350px;
  @media screen and (max-width: 611px) {
    width: 45%;
    position: absolute;
    left: 0;
    top: 750px;
  }
`;

export const Img3 = styled.img`
  z-index: -1;
  width: 20%;
  position: absolute;
  right: 0;
  top: 900px;
  @media screen and (max-width: 611px) {
    width: 40%;
    position: absolute;
    right: 0;
    top: 800px;
  }
  @media screen and (min-width: 2000px) {
    top: 1000px;
    width: 15%;
  }
`;

export const Img4 = styled.img`
  z-index: -1;
  width: 20%;
  position: absolute;
  left: 0;
  top: 1150px;
   @media screen and (max-width: 611px) {
    width: 40%;
    top: 1450px;
  }
  @media screen and (min-width: 1200px) {
    top: 800px;
  } 
  @media screen and (min-width: 2000px) {
    top: 1000px;
    width: 10%;
  }

`;
