import { Link } from "react-router-dom";
import ResultCard from "../../../components/resultCard/Resultcard";
import H3Component from "../../../components/ui/text/H3component";
import logo from "../../../assets/images/zarla-voyage-voyage.png";
import "./ResultatPage.css";

function Resultat() {
  return (
    <>
      <Link to="/acceuil">
        <img className="upper-logo" src={logo} alt="logo du site" />
      </Link>
      <H3Component
        css="title-result"
        subtitle3="Notre résultat après recherche :"
      />
      <section className="container-result">
        <ResultCard />
      </section>
    </>
  );
}

export default Resultat;
