import React from "react";
import "./../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import {animate__fadeInLeftBig} from 'animate.css'

function Indian() {

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
      <div>
        <img className="mountain" src={require("./assets/mountains2.png")} />
        <img className="moon" src={require("./assets/moon.png")} />
        <img className="tree0" src={require("./assets/tree1.png")} />
        <img className="tree1" src={require("./assets/tree1.png")} />
      </div>

      <div>
        <img  ref={ref} className="cloud1" src={require("./assets/cloud1.png")} />
      </div>

    </div>
  );
}

export default Indian;
