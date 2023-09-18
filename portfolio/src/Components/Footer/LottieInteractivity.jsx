import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import lottie from "lottie-web";
import animationData from "../../assets/animation_lmjr4e2v.json";

const LottieInteractivity = () => {
  const animationContainerRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (inView && !animationFinished) {
      const animation = lottie.loadAnimation({
        container: animationContainerRef.current,
        animationData: animationData,
        loop: false,
        autoplay: true,
      });

      // Add scroll-based interactivity here
      animation.addEventListener("complete", () => {
        // Animation has finished playing, now go to frame 20 and pause
        animation.goToAndStop(45, true);
        setAnimationFinished(true); // Set the flag to indicate animation is finished
      });
    }
  }, [inView, animationFinished]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "300px",
        // display: animationFinished ? "none" : "block", // Hide when animation is finished
      }}
    >
      <div
        ref={animationContainerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieInteractivity;
