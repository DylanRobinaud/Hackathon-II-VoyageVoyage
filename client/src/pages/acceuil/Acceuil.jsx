import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import CarouselImg from "../../components/carousel/CarouselImg";
import H3Component from "../../components/ui/text/H3component";
import ButtonComponent from "../../components/ui/button/buttonComponent/ButtonComponent";
import SearchSection from "../../components/searchSection/SearchSection";

import "./Acceuil.css";

function Acceuil() {
  return (
    <main>
      <Header />
      <section className="section-acceuil">
        <SearchSection />
      </section>
      <section className="section-acceuil">
        <H3Component subtitle3="Découvrez des villes :" />
        <CarouselImg />
      </section>
      <div className="link-acceuil section-acceuil">
        <Link to="/questionnaire/partie1" className="btn">
          Trouver ma destination idéal
        </Link>
      </div>
    </main>
  );
}

export default Acceuil;
