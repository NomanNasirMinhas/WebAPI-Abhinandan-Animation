import React from "react";
import "./../App.css";
import useWebAnimations, {slideOutDown} from "@wellyshen/use-web-animations";
import IndianPlane from './indianJets'

function IndianBomb() {

    // bombRef.animate([{transform: 'transalte(0, 100)'}], {duration: 1500, iterations: Infinity});
    // const { ref, getAnimation } = useWebAnimations({
    //     keyframes: { transform: ["translateY(400px)"], },
    //     timing: { duration: 2000, fill: "forwards", iterations: 1, delay:10000},

    //   });

  return (
    <div>

        <IndianPlane />
        <div>
        <img className="indianBomb" src={require("./assets/bomb.png")} />
      </div>
      <img className="explosion" src={require("./assets/explosion1.png")} />
    </div>
  );
}

export default IndianBomb;
