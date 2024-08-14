import { Link } from "react-router-dom";

import ResultCard from "../../../components/resultCard/Resultcard";

import logo from "../../../assets/images/zarla-voyage-voyage.png";
import "./ResultatPage.css";

function Resultat() {
  return (
    <>
      <Link to="/acceuil">
        <img className="upper-logo" src={logo} alt="logo du site" />
      </Link>
      <h1 className="title-result">Notre résultat après recherche</h1>
      <ResultCard />
    </>
  );
}

export default Resultat;
