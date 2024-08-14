import { Container, AniContainer, BottomFooter, TextBox } from "./styles";
import LottieInteractivity from "./LottieInteractivity";

const Footer = () => {

  return (
    <>
    <AniContainer>
      <LottieInteractivity />
      </AniContainer>
      
        <Container className="textBox">
            <h2>Let's have a chat</h2>
            <p>Have an interesting idea to share, or do you just want to say hi?</p>
          <a href="mailto: moami.dev@gmail.com" style={{backgroundColor: "#b86800", marginTop: "30px", padding: "10px 20px", display: "inlineBlock", maxWidth: "30%", borderRadius: "30px", textDecoration: "none"}}>Email me</a>
          <p style={{fontSize: "0.8rem"}}>moami.dev@gmail.com</p>
        </Container>

    <BottomFooter>
      <div>
      <TextBox>
      <h4>Education</h4>
      <p>Noroff Vocational school</p>
      <p>Font-End Development</p>
      <p>June 2023</p>
      </TextBox>

      <TextBox>
      <p>University of Stavanger</p>
      <p>Sociology</p>
      <p>2017</p>
      </TextBox>
      </div>

      <div>
      <TextBox>
      <h4>Experience</h4>
      <p>Noroff project</p>
      </TextBox>
      </div>
      <div>
      <TextBox>
      <h4>Design skills</h4>
      <p>UX</p>
      <p>Design thinking</p>
      <p>Design research</p>
      <p>Branding + Identity</p>
      <p>Logo design</p>
      </TextBox>
      </div>
      <div>
      <TextBox>
      <h4>Technical skills</h4>
      <p>Figma</p>
      <p>Photoshop</p>
      <p>CSS3 + HTML5 + Javascript</p>
      <p>React + Redux</p>
      <p></p>
      <p>Microsoft office</p>
      </TextBox>
      </div>
    </BottomFooter>
    </>
    )
};

export default Footer;