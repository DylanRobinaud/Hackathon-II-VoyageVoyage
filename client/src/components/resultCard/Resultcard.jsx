import H3Component from "../ui/text/H3component";
import H2Component from "../ui/text/H2component";
import data from "../../assets/data/data";

import "./ResultCard.css";

function ResultCard() {
  return (
    <div>
      <img src={data[0].image_url} alt={data[0].city_name} />
      <h1>{data[0].city_name}</h1>
      <H2Component
        subtitle1={`${data[0].continent_name} ${data[0].country_name}`}
      />
      <H3Component subtitle3={data[0].description} />
    </div>
  );
}

export default ResultCard;
