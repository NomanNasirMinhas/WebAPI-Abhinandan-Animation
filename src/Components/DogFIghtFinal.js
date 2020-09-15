import React, {useRef} from "react";
import "./../App.css";
import useWebAnimations, {shakeY} from "@wellyshen/use-web-animations";
import DogFIght from './DogFIght'

function DogFight() {
    const f16 = useRef(null);
    const { keyframes, timing } = shakeY;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
          ...timing,
          iterations: Infinity, // Delay 1s
          delay:12000,

          duration: 5500, // Speed up the animation
        },
        
      });

      const {ref2} = ref;


  return (
    <div>
        <DogFIght />
      <div>
        <img  ref={ref} className="mig21" src={require("./assets/mig212.png")} />
      </div>
      <div>
        <img  className="missile" src={require("./assets/missile.png")} />
      </div>
      <div>
        <img   className="shot" src={require("./assets/splash.png")} />
      </div>

    </div>
  );
}

export default DogFight;
