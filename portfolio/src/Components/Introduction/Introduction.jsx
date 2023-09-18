import Lottie from "lottie-react";
import animationData from "../../assets/animation_lkyp3wp0.json";
import { useRef } from "react";
import { Container, DesktopAnimation, MobileAnimation, Icons } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Introduction = () => {
  const phoneRef = useRef();

  const stopAnimationAtTime = (time) => {
    if (phoneRef.current) {
      phoneRef.current.goToAndStop(time, true);
    }
  };

  return (
    <>
    <Container>
      <div>
        <h1 style={{fontSize: "2.5rem", textAlign: "left", color: "#e0d1ff"}}>Front-End Development</h1>
        <h2 className="specialFont" style={{lineHeight: "0.6", fontSize: "2.5rem", marginTop: "-20px", textAlign: "left", color: "#60429b", textShadow: "#e0d1ff 2px 2px"}}>&</h2>
        <h2 className="specialFont" style={{lineHeight: "0.9", fontSize: "2.5rem", marginTop: "-20px", textAlign: "left", color: "#60429b", textShadow: "#e0d1ff 2px 2px"}}>Design</h2>
      </div>

      <DesktopAnimation>
      <Lottie
        onComplete={() => stopAnimationAtTime(2)}
        lottieRef={phoneRef}
        // loop={false}
        animationData={animationData}
      />
      </DesktopAnimation>
    </Container>

      <MobileAnimation>
      <Lottie
        style={{ width: "90%" }}
        onComplete={() => stopAnimationAtTime(2)}
        lottieRef={phoneRef}
        // loop={false}
        animationData={animationData}
      />
      </MobileAnimation>
      <div className="textBox">
        <h1 style={{fontSize: "1.7rem"}}>Hi</h1>
        <p>
          I design and build websites using HTML, CSS and JS React.
        </p>
        <p>
          I enjoy working on fun design ideas and prototyping using tools such as Figma, Photoshop and Illustrator.
        </p>
        <Icons style={{paddingBottom: "20px"}}>
          <Link to={"https://www.linkedin.com/in/regine-naas-8b109821b/"} target="_blank" ><FontAwesomeIcon icon={faLinkedin} size="xl" className="icons" /></Link>
          <Link to={"https://github.com/MoamiStay"} target="_blank" ><FontAwesomeIcon icon={faGithub} size="xl" className="icons" /></Link>
          <Link to={"https://www.instagram.com/moamistay_dev/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&fbclid=IwAR1PMNIgcJB8pqfX1XeMKVIlDqtNn6jM5MJqO8XqJgDchoYSLLe-YuJAEAc"} target="_blank"><FontAwesomeIcon icon={faInstagram} size="xl" className="icons"  /></Link>
        </Icons>
      </div>
      </>
  );
};

export default Introduction;
