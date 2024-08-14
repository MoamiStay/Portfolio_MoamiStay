import React from "react";
import { Link } from "react-router-dom";

import { Img, Eval, Header, Bg, CardSection, ContentStyle } from "./styles";

const Websites = () => {
  return (
    <CardSection>
         <div>
        <ContentStyle>
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
        </ContentStyle>
      </div>

      <div>
        <ContentStyle>
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
        </ContentStyle>
      </div>

      <div>
        <ContentStyle>
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
        </ContentStyle>
      </div>
    </CardSection>
  )
};

export default Websites;