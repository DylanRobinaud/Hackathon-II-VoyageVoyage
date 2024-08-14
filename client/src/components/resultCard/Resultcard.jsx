import H3Component from "../ui/text/H3component";
import ParagraphComponent from "../ui/text/ParagraphComponent";
import data from "../../assets/data/data";
import H2Component from "../ui/text/H2component";
import "./ResultCard.css";

function ResultCard() {
  return (
    <article className="article-result">
      <img
        className="img-result"
        src={data[0].image_url}
        alt={data[0].city_name}
      />
      <div className="div-result">
        <H2Component subtitle1={data[0].city_name} />
        <H3Component
          subtitle3={`${data[0].continent_name} ${data[0].country_name}`}
        />
        <ParagraphComponent text={data[0].description} />
      </div>
    </article>
  );
}

export default ResultCard;
