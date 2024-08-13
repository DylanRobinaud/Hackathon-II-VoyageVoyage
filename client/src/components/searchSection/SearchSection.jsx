import { useState } from "react";

import Input from "../ui/input/Input";
import Button from "../ui/button/buttonSubmit/ButtonSubmit";

import "./SearchSection.css";

const handleClick = (e) => {
  e.preventDefault();
};

function SearchSection() {
  const [recherche, setRecherche] = useState("");

  return (
    <form>
      <Input
        type="text"
        id="search"
        name="search"
        value={recherche}
        placeholder="Entrer une destination"
        onChange={(e) => {
          setRecherche(e.target.value);
        }}
      />
      <Button text="Rechercher" css="search-btn" handleClick={handleClick} />
    </form>
  );
}

export default SearchSection;
