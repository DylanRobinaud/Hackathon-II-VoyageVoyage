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
      <div className="btn-acceuil section-acceuil">
        <ButtonComponent text="Trouver ma destination idéal" css="" />
      </div>
    </main>
  );
}

export default Acceuil;
