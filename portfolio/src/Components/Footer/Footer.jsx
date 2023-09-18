import { Container, AniContainer } from "./styles";
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
    </>
    )
};

export default Footer;