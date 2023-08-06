import Lottie from "lottie-react"
import animationData from "../../assets/animation_lkyp3wp0.json"
import { useRef } from "react";
import { Container, DesktopAnimation, MobileAnimation, Icons } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedIn} from '@fortawesome/free-solid-svg-icons';



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
        <h1 style={{fontSize: "2rem", textAlign: "left", color: "#e0d1ff"}}>Front-End Development</h1>
        <h2 className="specialFont" style={{fontSize: "2rem", marginTop: "-20px", textAlign: "left", color: "#60429b", textShadow: "#e0d1ff 2px 2px"}}>&</h2>
        <h2 className="specialFont" style={{fontSize: "2rem", marginTop: "-20px", textAlign: "left", color: "#60429b", textShadow: "#e0d1ff 2px 2px"}}>Design</h2>
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
        <h3>About me</h3>
        <p>
          I design and build websites using HTML, CSS and Javascript.
        </p>
        <p>
          I enjoy working on design and prototyping. I use tools such as Figma, Photoshop and Illustrator.
        </p>
        <Icons>
          <Link to={"https://www.linkedin.com/in/regine-naas-8b109821b/"}><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "white"}}/></Link>
          <Link to={"https://github.com/MoamiStay"}><FontAwesomeIcon icon={faGithub} size="xl" style={{color: "white", margin: "0 10px"}}/></Link>
          {/* <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "white"}}/> */}
        </Icons>
      </div>
      </>
  );
};

export default Introduction;
