import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#fafafa0',
};

import { Img, Eval, Header, Bg } from "./styles";

const Cards = () => {
  return (
    <section style={{marginTop: "200px"}}>
      <h1 style={{ textAlign: "center" }}>Websites</h1>

  <Carousel dotPosition={"top"} autoplay>
    <div>
      <h3 style={contentStyle}>
        <Img src="./holidaze.png" alt="" />
        <details>
          <summary className="cardLink">HOLIDAZE</summary>
          <Bg>
          <Eval>
          <Header>
            <p style={{fontWeight: "bolder"}}>Accomodation booking site &#40;Individual project&#41;</p>
            <p>Built with React HTML CSS ANTD</p>
          </Header>
          <p style={{fontWeight: "bold", color: "#d5c745"}}>Register test user example email: test@noroff.no</p>
          <h4>Fulfilled assignment criteria:</h4>
          <ul>
            <li>"Customer" and "Venue manager" registratioin</li>
            <li>Login/logout</li>
            <li>View a list of venues from API</li>
            <li>Search for a specific venue</li>
            <li>View a calendar with available dates</li>
            <li>"Venue manager" can create, edit and delete a venue, and view current bookings</li>
            <li>Change profile image</li>
          </ul>
          <Link to="https://github.com/MoamiStay/FINAL_mai2023" target="_blank" className="icons">Github</Link>
          <Link to="https://holidaze-moami.netlify.app/" target="_blank" className="icons">Hosted site &#40;Netlify&#41;</Link>
          </Eval>
          </Bg>
        </details>
      </h3>
    </div>

    {/* BIDWELL  */}
    {/* <div>
      <h3 style={contentStyle}>
        <Img src="./bidwell.png" alt="" />
        <details>
          <summary className="cardLink">BIDWELL</summary>
          <Bg>
          <Eval>
          <Header>
            <p style={{fontWeight: "bolder"}}>Auction website &#40;Individual project&#41;</p>
            <p>React HTML CSS Tailwind</p>
          </Header>
          <p style={{fontWeight: "bold", color: "#d5c745"}}>Register test user example email: test@noroff.no</p>
          <h4>Fulfilled assignment criteria:</h4>
          <ul>
            <li>User registration form with validation</li>
            <li>Login/logout</li>
            <li>User can log in and have 1000 Credits as sign-up reward</li>
            <li>Load auction listings from API</li>
            <li>Make a bid on a listed item</li>
            <li>Create a new listing</li>
            <li>Receive Credits for successfully selling an item</li>
            <li>Change profile picture</li>
          </ul>
          <p>At the time I was still new to React/Redux and I ended up spending most of the time trying to figure out redux in particular, and unfortunately ended up neglecting the visual aspect and lacking detail work.</p>
          <p>Admittedly one of the worst end-products, however it was a very valuable experience as I learned a lot from this project.</p>
          <Link to="https://github.com/MoamiStay/EXAM_Dec2022" target="_blank" className="icons">Github</Link>
          <Link to="https://exam-auction-regine.netlify.app/" target="_blank" className="icons">Hosted site &#40;Netlify&#41;</Link>
          </Eval>
          </Bg>
        </details>
      </h3>
    </div> */}

    {/* KAGE */}
    {/* <div>
      <h3 style={contentStyle}>
        <Img src="./kage.png" alt="" />
         <details>
          <summary className="cardLink">KAGE</summary>
          <Bg>
          <Eval>
          <Header>
            <p style={{fontWeight: "bolder"}}>eCommerce website &#40;Individual project&#41;</p>
            <p>React HTML CSS</p>
          </Header>
          <h4>Fulfilled assignment criteria:</h4>
          <ul>
            <li>List products from API</li>
            <li>View each individual product</li>
            <li>View product reviews from API</li>
            <li>Add to cart</li>
            <li>Cart icon with cart item count &#40;Bugged on reset&#41;</li>
            <li>View grad total and total discount amount</li>
            <li>Checkout &#40;Clear cart only&#41;</li>
          </ul>
          <p>First small-scale project using React with React-Redux.</p>
          <Link to="https://github.com/MoamiStay/CA-Kage-Ecom" target="_blank" className="icons">Github</Link>
          <Link to="https://kage-main.netlify.app/" target="_blank" className="icons">Hosted site &#40;Netlify&#41;</Link>
          </Eval>
          </Bg>
        </details>
        </h3>
    </div> */}

    <div>
      <h3 style={contentStyle}>
        <Img src="./woodz.jpg" alt="" />
        <details>
          <summary className="cardLink">WOODZ</summary>
          <Bg>
          <Eval>
          <Header>
            <p style={{fontWeight: "bolder"}}>Music artist website &#40;Individual project&#41;</p>
            <p>HTML CSS Vanilla-Javascript Wordpress</p>
            </Header>
          <h4>Fulfilled assignment criteria:</h4>
          <ul>
            <li>Include homepage, about page, list of blog posts &#40;Albums&#41;, blog post details page, contact page &#40;Audition form&#41; </li>
            <li>A carousel displaying recent blog posts &#40;Bugged + first album post is not an album and is included as a deliberate test for a &#x23;404 error page &#41;</li>
            <li>"Load more" button &#40;Bugged when used after sorting albums&#41;</li>
            <li>Newest/oldest sorting/filter option &#40;Optional&#41;</li>
          </ul>
          <p>A website that is built using wordpress as a headless CMS.</p>
          <p>! This project uses a real artists official images. I did not seek permission to use these images as the only purpose of this website is to showcase my web design and development skills. </p>
          <Link to="https://github.com/MoamiStay/EXAM_mai2022" target="_blank" className="icons">Github</Link>
          <Link to="https://woodz.netlify.app/" target="_blank" className="icons">Hosted site &#40;Netlify&#41;</Link>
          </Eval>
          </Bg>
        </details>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Img src="./museum.jpg" alt="" />
        <details>
          <summary className="cardLink">COMMUNITY MUSEUM</summary>
          <Bg>
          <Eval>
          <Header>
            <p style={{fontWeight: "bolder"}}>Museum homepage &#40;Individual project&#41;</p>
            <p>HTML CSS</p>
          </Header>
          <h4>Fulfilled assignment criteria:</h4>
          <ul>
          <li>Create a website using only vanilla HTML and CSS. The website is for a new local community museum for kids in the age range 8-17 year old.</li>
          <li>The page should have a attractive design and be easy to navigate. The site should include between 4-6 pages.</li>
          </ul>
          <p>This was one of the very first "big" projects I was assigned. At this point we had only covered basic HTML and CSS.</p>
          <Link to="https://github.com/MoamiStay/EXAM_Dec2021" target="_blank" className="icons">Github</Link>
          <Link to="https://community-museum-exam.netlify.app/" target="_blank" className="icons">Hosted site &#40;Netlify&#41;</Link>
          </Eval>
          </Bg>
        </details>
      </h3>
    </div>
  </Carousel>
    </section>
  );
};

export default Cards;
