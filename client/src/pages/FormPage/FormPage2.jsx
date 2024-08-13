import { Link } from "react-router-dom";

import logo from "../../assets/images/zarla-voyage-voyage.png";
import "./FormPage.css";

import ParagraphComponent from "../../components/ui/text/ParagraphComponent";

function FormPage2() {
  return (
    <main className="main-form">
      <img src={logo} alt="logo du site" />
      <form>
        <ParagraphComponent text="Form page 2" />
      </form>
      <Link to="partie2">Passez a la suite </Link>
    </main>
  );
}

export default FormPage2;
