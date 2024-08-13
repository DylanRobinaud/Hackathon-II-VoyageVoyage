import { Link } from "react-router-dom";

import logo from "../../../assets/images/zarla-voyage-voyage.png";

import ParagraphComponent from "../../../components/ui/text/ParagraphComponent";

function FormPage3() {
  return (
    <main className="main-form">
      <img src={logo} alt="logo du site" />
      <form>
        <ParagraphComponent text="Resultat" />
      </form>
      <Link to="resultat">Résultat </Link>
    </main>
  );
}

export default FormPage3;
