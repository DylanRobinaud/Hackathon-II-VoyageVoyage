import background from "../../assets/images/background-acceuil.jpg";
import logo from "../../assets/images/zarla-voyage-voyage.png";

import ParagraphComponent from "../ui/text/ParagraphComponent";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="background du site " className="logo" />
      <ParagraphComponent
        text="Vos souhaits, votre trip : on organise, vous profitez !"
        css="header"
      />
      <img src={background} alt="background du site " />
    </header>
  );
}

export default Header;
