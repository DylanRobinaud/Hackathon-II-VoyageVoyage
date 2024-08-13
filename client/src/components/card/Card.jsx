import { Link } from "react-router-dom";

import H3Component from "../ui/text/H3component";
import H2Component from "../ui/text/H2component";

import "./Card.css";

function Card({ town, subtitle, photoUrl, cityId }) {
  return (
    <Link to={`/ville-details/${cityId}`} className="card-section">
      <article className="article-card">
        <div className="card">
          <H2Component subtitle1={town} />
          <H3Component subtitle3={subtitle} />
        </div>
        <img src={photoUrl} alt={` ${town} `} />
      </article>
    </Link>
  );
}

export default Card;
