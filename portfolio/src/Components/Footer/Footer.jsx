import { Container } from "./styles";

const Footer = () => {
    return (
        <Container className="textBox">
            <h2>Interessted? Let's have a chat</h2>
            <p>Got some interesting idea to share? Or are you just curious and want to say hi?</p>
          <a href="mailto: reginenaas@gmail.com" style={{backgroundColor: "#b86800", padding: "10px 20px", display: "inlineBlock", maxWidth: "30%", borderRadius: "30px", textDecoration: "none"}}>Send Email</a>
          <p>reginenaas@gmail.com</p>
        </Container>
    )
};

export default Footer;