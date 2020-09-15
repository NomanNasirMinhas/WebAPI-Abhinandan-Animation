import React from "react";
import "./../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import Indian from './nightCloud1'

function Cloud2() {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: { transform: ["translateX(-1000px)"] },
        timing: { duration: 5000, fill: "forwards", iterations: Infinity, delay:0, },
      });

      const { ref2, getAnimation2 } = useWebAnimations({
        keyframes: { transform: ["translateX(-1000px)"] },
        timing: { duration: 5000, fill: "forwards", iterations: Infinity, autoplay: true},
      });

  return (
    <div>
        <Indian />
      <div>
        <img  ref={ref} className="cloud2" src={require("./assets/cloud2.png")} />
      </div>

    </div>
  );
}

export default Cloud2;
