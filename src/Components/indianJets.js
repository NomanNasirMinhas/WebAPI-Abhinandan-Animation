import React from "react";
import "./../App.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import Cloud2 from './nightCloud2'

function IndianPlane() {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: { transform: ["translateX(-800px) translateY(100px)"] , },
        timing: { duration: 2000, fill: "forwards", iterations: 1,},

      });





  return (
    <div>
        <Cloud2 />
      <div>
        <img   className="indianPlane" src={require("./assets/mig.png")} />
      </div>

    </div>
  );
}

export default IndianPlane;
