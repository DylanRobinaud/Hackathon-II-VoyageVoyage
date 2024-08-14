import { Link } from "react-router-dom";
import logo from "../../assets/images/zarla-voyage-voyage.png";
import H1Component from "../ui/text/H1component";
import "./CityHeader.css";

function CityHeader({ data }) {
  return (
    <header>
      <Link to="/acceuil">
        <img src={logo} alt="background du site " className="logo" />
      </Link>
      <H1Component title={data.city_name} css="header" />
      <img
        className="header-background"
        src={`${data.image_url}`}
        alt="background de la ville"
      />
    </header>
  );
}

export default CityHeader;
