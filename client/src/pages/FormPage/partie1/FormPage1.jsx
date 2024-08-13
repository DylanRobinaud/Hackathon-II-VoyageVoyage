import { Link } from "react-router-dom";
import { useHackaton } from "../../../context/HackathonContext";

import logo from "../../../assets/images/zarla-voyage-voyage.png";
import "./FormPage.css";
import "../../../components/ui/button/Button.css";

import Input from "../../../components/ui/input/Input";
import ParagraphComponent from "../../../components/ui/text/ParagraphComponent";

function FormPage1() {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    nbAdults,
    setNbAdults,
    nbChildrens,
    setNbChildrens,
  } = useHackaton();

  return (
    <main className="main-form1">
      <img src={logo} alt="logo du site" />
      <form>
        <ParagraphComponent text="Quand souhaitez vous partir ?" />
        <div>
          <Input
            label="Date du départ :"
            type="date"
            id="start"
            name="trip-start"
            value={startDate}
            placeholder=""
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <Input
            label="Date du retour :"
            type="date"
            id="end"
            name="trip-end"
            value={endDate}
            placeholder=""
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <ParagraphComponent text="Pour combien de personnes ?" />
        <div>
          <Input
            label="Nombre d'adultes :"
            type="number"
            id="adult"
            name="nbAdults"
            value={nbAdults}
            placeholder=""
            onChange={(e) => setNbAdults(Number(e.target.value))}
          />
        </div>
        <div>
          <Input
            label="Nombre d'enfants :"
            type="number"
            id="children"
            name="nbChildren"
            value={nbChildrens}
            placeholder=""
            onChange={(e) => setNbChildrens(Number(e.target.value))}
          />
        </div>
      </form>
      <div className="link">
        <Link to="/questionnaire/partie2" className="btn link">
          Passez à la suite
        </Link>
      </div>
    </main>
  );
}

export default FormPage1;
