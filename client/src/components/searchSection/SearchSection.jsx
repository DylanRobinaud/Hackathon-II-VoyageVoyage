import { useState } from "react";

import Input from "../ui/input/Input";
import Button from "../ui/button/buttonSubmit/ButtonSubmit";
import Card from "../card/Card";

import data from "../../assets/data/data";

import "./SearchSection.css";

function SearchSection() {
  const [recherche, setRecherche] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredData(
      data.filter((item) =>
        item.city_name.toLowerCase().includes(recherche.toLowerCase())
      )
    );
    setIsSubmitted(true);
  };

  return (
    <section className="recherche">
      <form className="barre-recherche" onSubmit={handleSearch}>
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
        <Button text="Rechercher" css="search-btn" handleClick={handleSearch} />
      </form>
      {isSubmitted
        ? filteredData.map((item) => (
            <Card
              town={item.city_name}
              subtitle={item.country_name}
              photoUrl={item.image_url}
              cityId={item.city_id - 1}
              key={item.city_id}
            />
          ))
        : ""}
    </section>
  );
}

export default SearchSection;
