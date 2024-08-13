import Globe from "../../assets/images/globe_only.png";
import Plane from "../../assets/images/plane_only.png";
import Voyage from "../../assets/images/juste-voyage.png";

import "./Welcome.css";

function Welcome() {
  return (
    <div className="annimated-logo">
      <img className="globe" src={Globe} alt="globe" />
      <img className="plane" src={Plane} alt="avion" />
      <img className="text-left" src={Voyage} alt="titre gauche" />
      <img className="text-right" src={Voyage} alt="titre droite" />
    </div>
  );
}

export default Welcome;
