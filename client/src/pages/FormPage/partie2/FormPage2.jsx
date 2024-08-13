import { Link } from "react-router-dom";
import { useHackaton } from "../../../context/HackathonContext";

import Slider from "../../../components/ui/slider/Slider";

import logo from "../../../assets/images/zarla-voyage-voyage.png";
import "./FormPage2.css";

import ParagraphComponent from "../../../components/ui/text/ParagraphComponent";

function FormPage2() {
  const {
    journeyRange,
    setJourneyRange,
    housingRange,
    setHousingRange,
    entertainementRange,
    setEntertainementRange,
  } = useHackaton();

  return (
    <main className="main-form2">
      <img className="upper-logo" src={logo} alt="logo du site" />
      <form>
        <ParagraphComponent text="Quel est votre budjet moyen pour ce voyage ? " />
        <div className="form-element">
          <Slider
            label="Budjet pour le trajet (l'aller-retour)"
            id="journey"
            values={journeyRange}
            min={0}
            max={1000}
            handleChange={(value) => {
              setJourneyRange(value);
            }}
          />
        </div>
        <div className="form-element">
          <Slider
            label="Budjet pour le logement (par nuit)"
            id="housing"
            values={housingRange}
            min={0}
            max={500}
            handleChange={(value) => {
              setHousingRange(value);
            }}
          />
        </div>
        <div className="form-element">
          <Slider
            label="Budjet pour les divertissements (par jour)"
            id="entertainement"
            values={entertainementRange}
            min={0}
            max={100}
            handleChange={(value) => {
              setEntertainementRange(value);
            }}
          />
        </div>
      </form>
      <Link className="btn" to="/questionnaire/partie3">
        Passez à la suite
      </Link>
    </main>
  );
}

export default FormPage2;
