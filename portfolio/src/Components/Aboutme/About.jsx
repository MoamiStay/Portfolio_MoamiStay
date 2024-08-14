import Lottie from "lottie-react";
import animationData from "../../assets/animation_lmjr52t1.json";
import { useRef } from "react";
import { Container, MobileAnimation, PfImg, AboutText } from "./styles";

const About = () => {

  const phoneRef = useRef();

  const stopAnimationAtTime = (time) => {
    if (phoneRef.current) {
      phoneRef.current.goToAndStop(time, true);
    }
  };

    return (
        <>
    <MobileAnimation style={{marginTop: "150px"}}>
      <Lottie
        onComplete={() => stopAnimationAtTime(2)}
        lottieRef={phoneRef}
        animationData={animationData}
      />
    </MobileAnimation>

        <div className="textBox">
          <Container>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <PfImg src="./pfimg.png" alt="profile image" />
              <p>Regine</p>
            </div>
            <AboutText>
              {/* <p>Born in 96' in Stavanger city, raised in a small town surrounded by mountains named Eide, currently stationed in the seaside city of Bergen, Norway.</p> */}
              <p>In 2021 I decided to try my hand at web development and enrolled in a 2 year Front-End degree at Noroff which I proudly graduated from in June of 2023.</p>
              <p>I would say I excell in the design, layout and visual planning aspects of Front-End as that is what I enjoy the most.</p>
              <p>I find planning, prototyping and creating logos to be satisfying and fun work. Using shapes, colors and images to create visually interesting and practical websites is what I hope I get to work with and aquire improved skills and deeper knowledge.</p>
            </AboutText>
          </Container>
        </div>
        </>
    )
};

export default About;