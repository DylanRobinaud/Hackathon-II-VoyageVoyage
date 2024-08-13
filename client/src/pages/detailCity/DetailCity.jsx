import { useParams } from "react-router-dom";

import data from "../../assets/data/data";
import CityHeader from "../../components/cityHeader/CityHeader";
import ParagraphComponent from "../../components/ui/text/ParagraphComponent";
import StatCard from "../../components/statistique/StatCard";
import H3Component from "../../components/ui/text/H3component";
import Map from "../../components/map/Map";

import "./DetailCity.css";

function DetailCity() {
  const { id } = useParams();

  return (
    <main className="main-detail-city">
      <CityHeader data={data[id]} />
      <div className="div-description">
        <ParagraphComponent
          text={data[id].description}
          css="section-description"
        />
      </div>
      <section className="section-detail-city">
        <article className="article-detail-city">
          <H3Component subtitle3="Statistique :" />
          <StatCard />
        </article>
      </section>
      <section className="section-detail-city">
        <article className="article-detail-city">
          <H3Component subtitle3="Localisation :" />
          <Map
            lat={data[id].coordinates.latitude}
            long={data[id].coordinates.longitude}
          />
        </article>
      </section>
    </main>
  );
}

export default DetailCity;
