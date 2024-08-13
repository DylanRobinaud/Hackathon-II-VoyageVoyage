import statistique from "../../assets/data/statistique";
import ParagraphComponent from "../ui/text/ParagraphComponent";

import "./StatCard.css";

function StatCard() {
  return (
    <article className="stat-article">
      {statistique.map((statCity) => (
        <div key={statCity.statistique_id} className="stat-div">
          <img src={statCity.logo_url} alt="nom de la stat" />
          <ParagraphComponent text={statCity.moyenne} />
          <ParagraphComponent text="en moyenne" />
        </div>
      ))}
    </article>
  );
}

export default StatCard;
