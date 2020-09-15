import React, {useRef} from "react";
import "./../App.css";
import useWebAnimations, {shakeY} from "@wellyshen/use-web-animations";
import IndianAttack from './indianBomb'

function DogFight() {
    const f16 = useRef(null);
    const { keyframes, timing } = shakeY;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
          ...timing,
          iterations: Infinity, // Delay 1s
          delay:12000,

          duration: 5000, // Speed up the animation
        },
        
      });

      const {ref2} = ref;


  return (
    <div>
        <IndianAttack />
      <div>
        <img  ref={ref} className="f16" src={require("./assets/f162.png")} />
      </div>

    </div>
  );
}

export default DogFight;
