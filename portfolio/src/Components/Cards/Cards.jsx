import React from "react";
import { Carousel } from 'antd';
const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#180b33',
};
// import { Link } from "react-router-dom";
import { Card, Container, Img, ImgContainer } from "./styles";

const Cards = () => {
  return (
    <section style={{marginTop: "200px"}}>
      <h1 style={{ textAlign: "center" }}>Websites</h1>

        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Img src="./bidwell.png" alt="" />
        <details>
          <summary>BIDWELL</summary>
          <p>Place your additional text here.</p>
        </details>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Img src="./kage.png" alt="" />
        <details>
          <summary>KAGE</summary>
          <p>Place your additional text here.</p>
        </details>
        </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Img src="./holidaze.png" alt="" />
        <details>
          <summary>HOLIDAZE</summary>
          <p>Place your additional text here.</p>
        </details>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Img src="./holidaze.png" alt="" />
        <details>
          <summary>WOODZ</summary>
          <p>Place your additional text here.</p>
        </details>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Img src="./holidaze.png" alt="" />
        <details>
          <summary>MUSEUM</summary>
          <p>Place your additional text here.</p>
        </details>
      </h3>
    </div>
  </Carousel>


      {/* <Container>
          <Card>
            <ImgContainer>
                <Img src="./bidwell.png" alt="" />
            </ImgContainer>
            <Link to={"https://exam-auction-regine.netlify.app/index.html"} target="_blank"><p>Bidwell website</p></Link>
            <p>A auction website with registration, authentication and login.</p>
            <Link to={"https://github.com/MoamiStay/EXAM_Dec2022/tree/main/exam_autumn22_regine"} target="_blank"><p>Github</p></Link>
          </Card>

          <Card>
            <ImgContainer>
                <Img src="./kage.png" alt="" />
            </ImgContainer>
            <Link to={"https://kage-main.netlify.app"} target="_blank"><p>Kage website</p></Link>
            <p>A small ecom site with products and an item cart.</p>
            <Link to={"https://github.com/MoamiStay/CA-Kage-Ecom/tree/main/kagestore"} target="_blank"><p>Github</p></Link>
          </Card>


          <Card>
            <ImgContainer>
                <Img src="./holidaze.png" alt="" />
            </ImgContainer>
            <Link to={"https://holidaze-moami.netlify.app/"} target="_blank"><p>Holidaze website</p></Link>
            <p>A accomodation booking site with search, authentication and customer/admin login.</p>
            <Link to={"https://github.com/MoamiStay/FINAL_mai2023"} target="_blank"><p>Github</p></Link>
          </Card>
      </Container> */}
    </section>
  );
};

export default Cards;
