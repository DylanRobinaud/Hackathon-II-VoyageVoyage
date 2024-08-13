import H3Component from "../ui/text/H3component";
import H2Component from "../ui/text/H2component";
import "./Card.css";

function Card({ town, subtitle, photoUrl }) {
  return (
    <section className="card-section">
      <article className="article-card">
        <div className="card">
          <H2Component subtitle1={town} />
          <H3Component subtitle3={subtitle} />
        </div>
        <img src={photoUrl} alt={` ${town} `} />
      </article>
    </section>
  );
}

export default Card;
