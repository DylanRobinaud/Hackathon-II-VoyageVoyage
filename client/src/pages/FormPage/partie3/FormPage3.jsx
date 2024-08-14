import { Link } from "react-router-dom";
import { useHackaton } from "../../../context/HackathonContext";

import Select from "../../../components/ui/select/Select";
import logo from "../../../assets/images/zarla-voyage-voyage.png";
import "./FormPage3.css";

import H3Component from "../../../components/ui/text/H3component";
import InputRadio from "../../../components/ui/inputRadio/InputRadio";
import ParagraphComponent from "../../../components/ui/text/ParagraphComponent";

function FormPage3() {
  const transports = [
    { id: 0, name: "Voiture" },
    { id: 1, name: "Avion" },
    { id: 2, name: "Bateau" },
    { id: 3, name: "Train" },
    { id: 4, name: "Chameau" },
    { id: 5, name: "Velo" },
  ];
  const activitys = [
    { id: 0, name: "Randonnée" },
    { id: 1, name: "Visite culturelle" },
    { id: 2, name: "Cuisine locale" },
    { id: 3, name: "Plage" },
    { id: 4, name: "Velo" },
  ];
  const climats = [
    { id: 0, name: "Chaud" },
    { id: 1, name: "Froid" },
    { id: 2, name: "Tempérée" },
  ];
  const continents = [
    { id: 0, name: "Europe" },
    { id: 1, name: "Asie" },
    { id: 3, name: "Afrique" },
    { id: 4, name: "Océanie" },
    { id: 5, name: "Amerique" },
    { id: 6, name: "Peu m’importe" },
  ];

  const { activity, setActivity, climat, setClimat, continent, setContinent } =
    useHackaton();

  const handleActivityChange = (e) => {
    const selectedActivity = e.target.value;
    if (e.target.checked) {
      setActivity([...activity, selectedActivity]);
    } else {
      setActivity(activity.filter((act) => act !== selectedActivity));
    }
  };

  const handleClimatChange = (e) => {
    setClimat(e.target.value);
  };

  const handleContinentChange = (e) => {
    setContinent(e.target.value);
  };

  return (
    <main className="main-form">
      <img src={logo} alt="logo du site" />
      <form className="form-3">
        <H3Component subtitle3="Quelles sont t'es envies ?" />
        <Select
          datas={transports}
          question="Part quel moyen de transport souhaitez vous voyager ?"
          id={transports.id}
          css=""
          name={transports.name}
        />
        <ParagraphComponent text="Activités preferées :" />
        <InputRadio
          datas={activitys}
          type="checkbox"
          name="Activité"
          value={activity}
          onChange={handleActivityChange}
        />
        <ParagraphComponent text="Climat souhaité :" />
        <InputRadio
          datas={climats}
          type="radio"
          name="Climat"
          value={climat}
          onChange={handleClimatChange}
        />
        <ParagraphComponent text="Avez vous un continent de préférences ?" />
        <InputRadio
          datas={continents}
          type="radio"
          name="Continent"
          value={continent}
          onChange={handleContinentChange}
        />
      </form>
      <div className="link-form">
        <Link to="/questionnaire/resultat" className="btn " onClick="">
          Passez à la suite
        </Link>
      </div>
    </main>
  );
}

export default FormPage3;
