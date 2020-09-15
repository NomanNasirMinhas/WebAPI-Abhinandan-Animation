import React, {useRef} from "react";
import "./../App.css";
import useWebAnimations, {fadeOutDownBig} from "@wellyshen/use-web-animations";
import DogFIght from './DogFIghtFinal'

function Parachute() {
    const f16 = useRef(null);
    const { keyframes, timing } = fadeOutDownBig;
    // const { ref, getAnimation } = useWebAnimations({
    //     keyframes,
    //     timing: {
    //       ...timing,
    //       iterations: 1, // Delay 1s
    //       delay:23000,
    //       duration: 10000, // Speed up the animation
    //     },
        
    //   });
    const { ref, getAnimation } = useWebAnimations({
      keyframes: { transform: ["translateY(1000px)"], opacity:[1] },
      timing: { duration: 10000, fill: "forwards", iterations: 1, delay:27000, },
    });

      const slowDown = () => {
        const animation = getAnimation();
        animation.updatePlaybackRate(animation.playbackRate * 0.9);
      };


  return (
    <div onClick={slowDown}>
        <DogFIght />
        <div >
        <img ref={ref} className="chute" src={require("./assets/chute2.png")} />
      </div>
      <div >
        <img className="abhinandan" src={require("./assets/tea.png")} />
      </div>

      <div className="textDiv">
        <h1 className="txt" >The Tea was<br/> FANTASTIC</h1>
      </div>

    </div>
  );
}

export default Parachute;
